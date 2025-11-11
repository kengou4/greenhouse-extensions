{{/* Generate common labels */}}
{{- define "dynatrace.labels" -}}
plugindefinition: dynatrace
plugin: {{ $.Release.Name }}
{{- if .Values.global.commonLabels }}
{{ tpl (toYaml .Values.global.commonLabels) . }}
{{- end }}
{{- end }}

{{/* Generate Dynatrace API URL */}}
{{- define "dynatrace.apiUrl" -}}
{{- $baseDomain := required "A valid .global.baseDomain is required!" .Values.global.baseDomain -}}
{{- $projectID := required "A valid .global.projectID is required!" .Values.global.projectID -}}
https://{{ $baseDomain }}/e/{{ $projectID }}/api
{{- end }}

{{/* Generate Dynatrace ServerName */}}
{{- define "dynatrace.clusterName" -}}
{{ if .Values.global.clusterName }}
{{ .Values.global.clusterName }}
{{- else }}
{{- printf "%s" .Release.Name  | trunc 63 | trimSuffix "-" -}}
{{- end }}
{{- end -}}
