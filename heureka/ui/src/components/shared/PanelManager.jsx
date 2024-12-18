/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel, Stack, PanelBody } from "@cloudoperators/juno-ui-components"
import {
  useGlobalsActions,
  useGlobalsShowPanel,
  useGlobalsShowServiceDetail,
  useGlobalsShowIssueDetail,
} from "../../hooks/useAppStore"
import ServicesDetail from "../services/ServicesDetails"
import constants from "./constants"
import IssueMatchesDetails from "../issueMatches/IssueMatchesDetails"

const PanelManger = () => {
  const { setShowPanel, setShowServiceDetail, setShowIssueDetail } =
    useGlobalsActions()
  const showPanel = useGlobalsShowPanel()
  const showServiceDetail = useGlobalsShowServiceDetail()
  const showIssueDetail = useGlobalsShowIssueDetail()

  const onPanelClose = () => {
    setShowPanel(null)

    // clean up detail information
    setShowServiceDetail(null)
    setShowIssueDetail(null)
  }

  return (
    <Panel
      heading={
        <Stack gap="2">
          <span>
            {showPanel === constants.PANEL_SERVICE && showServiceDetail}
            {showPanel === constants.PANEL_ISSUE && "Detail"}
          </span>
        </Stack>
      }
      opened={!!useGlobalsShowPanel()}
      onClose={() => onPanelClose()}
      size="large"
    >
      <PanelBody>
        {showPanel === constants.PANEL_SERVICE && <ServicesDetail />}
        {showPanel === constants.PANEL_ISSUE && <IssueMatchesDetails />}
      </PanelBody>
    </Panel>
  )
}

export default PanelManger
