import { getCurrentPage } from "../pages/page";

export const enterIntoField = (fieldName, text) => {
  cy.log(
    "Step--------------entering into field " + fieldName + " text " + text
  );
  const page = getCurrentPage();
  const locator = page.fields[fieldName];

  cy.get(locator.CSS).should("be.enabled");
  cy.get(locator.CSS).clear();
  cy.get(locator.CSS).should("be.enabled");
  cy.get(locator.CSS).scrollIntoView().type(`${text}`);
};
