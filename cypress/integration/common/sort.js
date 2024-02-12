import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../fixtures/pages/LoginPage";

Given('I am on the SauceDemo.com login page', () => {
    LoginPage.visit();
});

When('I enter valid credentials for the Standard user', () => {
    LoginPage.inputUsername('standard_user');
    LoginPage.inputPassword('secret_sauce');
});

When('I login', () => {
    LoginPage.submit();
});

When('I sort the items in descending order', () => {
    // Click on the select dropdown
    cy.get('.product_sort_container').select('Name (Z to A)');
});

Then('the items should be displayed in descending order', () => {
    // Verify the items are displayed in descending order
    cy.get('.inventory_item_name').then(($items) => {
        let prevItemName = '';
        $items.each((index, item) => {
            const itemName = Cypress.$(item).text();
            if (index > 0) {
                expect(itemName.localeCompare(prevItemName)).to.be.lessThan(0);
            }
            prevItemName = itemName;
        });
    });
});