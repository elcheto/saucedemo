import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  goToPage,
  checkTextOnThePage,
} from "../../fixtures/pages/page";

Given(`I navigate to the page: {string}`, (pageName) => {
  goToPage(pageName);
  cy.viewport(1320, 2000);
});

Then(`I see text {string} on the page`, (text) => {
  checkTextOnThePage(text);
});