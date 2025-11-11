{{/* Generate common labels */}}
{{- define "dynatrace.labels" -}}
plugindefinition: dynatrace
plugin: {{ $.Release.Name }}
{{- if .Values.global.commonLabels }}
{{ tpl (toYaml .Values.global.commonLabels) . }}
{{- end }}
{{- end }}

{{- define "dynatrace.apiUrl" -}}
{{- $baseDomain := required "A valid .global.baseDomain is required!" .Values.global.baseDomain -}}
{{- $projectID := required "A valid .global.projectID is required!" .Values.global.projectID -}}
https://{{ $baseDomain }}/e/{{ $projectID }}/api
{{- end }}