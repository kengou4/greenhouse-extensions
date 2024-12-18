/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, act } from "@testing-library/react"

// support shadow dom queries
// https://reactjsexample.com/an-extension-of-dom-testing-library-to-provide-hooks-into-the-shadow-dom/
import { screen } from "shadow-dom-testing-library"

jest.mock("./hooks/useCommunication", () => {
  return jest.fn(() => ({}))
})
jest.mock("./hooks/useAlertmanagerAPI", () => {
  return jest.fn(() => ({}))
})

import App from "./App"

test("renders app", async () => {
  render(<App />)
  await act(() => {
    let loginTitle = screen.queryAllByShadowText(/Supernova/i)
    expect(loginTitle.length > 0).toBe(true)
  })
})
