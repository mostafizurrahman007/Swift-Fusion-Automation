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
