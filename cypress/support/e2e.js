// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

/*import "./commands";
// import 'cypress-mochawesome-reporter/register';

import "@shelex/cypress-allure-plugin";
// Attach screenshot automatically on failure (Allure)
Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === "failed") {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    cy.allure().attachment(
      "Screenshot on Failure",
      `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`,
      "image/png",
    );
  }
});

require("cypress-xpath");

require("cypress-terminal-report/src/installLogsCollector")();*/

import "@shelex/cypress-allure-plugin";
import "./commands";
import { startNetworkCapture, getNetworkSummary } from "./networkCapture";

require("cypress-xpath");
require("cypress-terminal-report/src/installLogsCollector")();

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  startNetworkCapture();
});

afterEach(function () {
  if (this.currentTest.state === "failed") {
    const networkText = getNetworkSummary();
    const safeName = (this.currentTest.title || "test")
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_]/g, "");

    // local file backup
    cy.writeFile(`cypress/logs/curl_${safeName}.txt`, networkText, {
      timeout: 10000,
    });

    // Allure attachment
    cy.then(() => {
      try {
        const allure = Cypress.Allure.reporter.getInterface();
        allure.attachment(
          `Network_cURL_${safeName}`,
          networkText,
          "text/plain",
        );
      } catch (e) {
        console.error("⚠️ Allure attachment error:", e.message);
      }
    });
  }
});
