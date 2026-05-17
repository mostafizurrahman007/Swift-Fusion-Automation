// Date Utility
export function getCurrentDateDDMMYYYY() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

// Cypress Safe Check inside dom Utility
export const safeCheck = (selector, action) => {
  cy.get("body").then(($body) => {
    const exists = $body.find(selector).length > 0;

    if (exists) {
      cy.wrap(null).then(() => action());
    } else {
      cy.log(`Skipped (not found): ${selector}`);
    }
  });
};

// Random Test data
export const randomString = (length = 8) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const randomNumber = (min = 1000, max = 9999) => {
  return Cypress._.random(min, max);
};

export const randomWithPrefix = (prefix) => {
  return `${prefix}_${randomString(6)}`;
};

export const verifyAlertMessage = (expectedText) => {
  cy.get('div[role="alert"]', { timeout: 4000 })
    .should("have.length.gte", 1) // at least one alert exists
    .then(($alerts) => {
      const matched = [...$alerts].some((el) =>
        el.innerText.trim().toLowerCase().includes(expectedText.toLowerCase()),
      );
      expect(matched, `Expected an alert containing: "${expectedText}"`).to.be
        .true;
    });
};

export const verifyAuthorization = (expectedText, selector = "p") => {
  cy.contains(selector, expectedText, { timeout: 4000 })
    .should("be.visible")
    .invoke("text")
    .then((msg) => {
      expect(msg.trim().toLowerCase()).to.include(expectedText.toLowerCase());
    });
  cy.contains("button", " OK ").should("be.visible").click();
};

/**
 * Clicks the close (✕) SVG icon within an optional parent selector.
 * @param {string} [parentSelector="body"]
 */
export const verifyAndCLoseMandatoryCheckBox = (parentSelector = "body") => {
  cy.get(parentSelector)
    .find('svg line[x1="18"][y1="6"][x2="6"][y2="18"]')
    .closest("svg")
    .should("be.visible")
    .click();
};