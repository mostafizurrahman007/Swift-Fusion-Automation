/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { commonLocators } from "../../support/locators/commonLocators";

class HomePage {
  debug() {
    cy.log("Debuging");
    cy.debug();
  }

  menu() {
    cy.log("Clicking on MX");
    cy.get("div[data-drawer-trigger=Menu]>img")
      .should("exist")
      .and("be.visible")
      .click({ force: true });
    cy.get("div[data-drawer-trigger=Menu]", { timeout: 10000 }).should(
      "be.visible",
      { force: true },
    );
  }

  reloadWindow() {
    cy.log("Page is reloading");
    cy.reload();
  }

  menu1() {
    cy.log("Clicking on MX");
    cy.get("div[data-drawer-trigger=Menu]>img")
      .should("exist")
      .and("be.visible");
    cy.get("div[data-drawer-trigger=Menu]", { timeout: 10000 })
      .should("be.visible", { force: true })
      .click({ force: true }, { timeout: 15000 });
    cy.get(".drawer-container > div.flex.border-b button")
      .first()
      .should("exist")
      .and("be.visible")
      .click({ force: true });

    cy.log("Clicking on Application");
    cy.log("To Interact Menu Clicking for Once");
    cy.get("div[data-drawer-trigger=Modules]>img", { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .click({ force: true }, { timeout: 15000 });

    cy.get(".drawer-container > div.flex.border-b button")
      .eq(0)
      .should("exist")
      .and("be.visible")
      .click({ force: true }, { timeout: 15000 });

    cy.log("Clicking on MX");
    cy.get("div[data-drawer-trigger=Menu]>img", { timeout: 15000 })
      .should("exist")
      .and("be.visible")
      .click({ force: true }, { timeout: 15000 });

    cy.get("div[data-drawer-trigger=Menu]", { timeout: 15000 }).should(
      "be.visible",
    );
  }

  searchByFastPath(input) {
    cy.get("input[placeholder='Fast Path...']")
      .should("be.visible")
      .clear()
      .type(`${input}{enter}`);
  }

  logout() {
    cy.get("div[routerlink='/login']")
      .should("be.visible")
      .and("exist")
      .click({ force: true });
  }

  search_MX_Message() {
    commonLocators
      .ByTextWithTag("p", "MX Messages", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  search_MT_Message() {
    commonLocators
      .ByTextWithTag("p", "MT Messages", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  search_MX_Message1() {
    cy.task("log", "--- PROOF GATHERING MODE: Starting Sequence ---");

    // 1. Setup Intercept and ALIAS
    cy.intercept(
      "GET",
      "**/resource-manager/api/v1/resource/accessible-resource/app?appId=941",
    ).as("mxMenuApi");

    // 2. Click the Menu
    cy.get('div[data-drawer-trigger="Menu"]')
      .should("be.visible")
      .click({ force: true });

    // 3. CAPTURE THE DATA PROOF
    cy.wait("@mxMenuApi", { timeout: 15000 }).then((interception) => {
      const { statusCode, body } = interception.response;

      cy.task("log", `📊 DATA PROOF: Status ${statusCode}`);
      cy.task("log", `📦 RESPONSE BODY: ${JSON.stringify(body)}`);

      if (statusCode === 200 && (!body || body.length === 0)) {
        cy.task(
          "log",
          "🚨 BUG FOUND: API returned empty list even for authorized user.",
        );
      }
    });

    // 4. CHECK FOR REDIRECT LOOP & BEARER TOKEN
    cy.url().then((url) => {
      if (url.includes("code=")) {
        cy.task(
          "log",
          "🚨 BUG FOUND: Redirect loop detected. 'code=' still in URL.",
        );

        // Check if the car keys (Bearer Token) actually exist in the browser
        cy.window().then((win) => {
          const token =
            win.localStorage.getItem("access_token") ||
            win.sessionStorage.getItem("access_token");
          if (token) {
            cy.task(
              "log",
              "🔑 TOKEN STATUS: Bearer Token exists, but app is failing to clean URL.",
            );
          } else {
            cy.task(
              "log",
              "❌ TOKEN STATUS: No Bearer Token found. Exchange failed completely.",
            );
          }
        });
      }
    });

    // 5. FLEXIBLE UI SEARCH
    cy.get("body").then(($body) => {
      const textToFind = "MX Messages";
      if ($body.text().includes(textToFind)) {
        cy.task("log", "✅ Text found in DOM, attempting click...");
        cy.contains(/MX Messages/i).click({ force: true });
      } else {
        cy.task(
          "log",
          `🚨 BUG PROOF: "${textToFind}" is missing from the entire Page Source.`,
        );
        cy.screenshot("UI-Rendering-Failure-Proof");
        throw new Error(
          `CRITICAL BUG: API sent data but UI did not render "${textToFind}"`,
        );
      }
    });
  }

  errorLog() {
    cy.get("[data-cy=menu-button]").click();

    cy.get("[data-cy=menu-button]").then(($el) => {
      const isVisible = $el.is(":visible");
      cy.log("Menu visible: " + isVisible);

      if (!isVisible) {
        cy.log("Display: " + $el.css("display"));
        cy.log("Visibility: " + $el.css("visibility"));
        cy.log("Opacity: " + $el.css("opacity"));
      }
    });
  }

  goToPage(text) {
    commonLocators
      .ByTextWithTag("p", text, {
        timeout: 10000,
      })
      .scrollIntoView()
      .click({ force: true });
  }
}

export default new HomePage();
