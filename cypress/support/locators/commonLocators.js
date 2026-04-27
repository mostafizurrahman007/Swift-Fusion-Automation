export const commonLocators = {
  inputByPlaceholder: (text) => cy.get(`input[placeholder="${text}"]`),

  ByTextWithTag: (tag, text) => cy.contains(tag, text),

  ByAria_Label_Btn: (text) => cy.get(`button[aria-label="${text}"]`),

  ByControlName: (text) => cy.get(`[controlname="${text}"]`),

  ByID: (text) => cy.get(`[id="${text}"]`),

  ByPanelID: (text) => cy.get(`[panelid="${text}"]`),
};
