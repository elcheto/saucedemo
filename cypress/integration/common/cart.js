import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the SauceDemo.com login page', () => {
    cy.visit('https://www.saucedemo.com/');
});

When('I enter valid credentials', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
});

When('I add an item to the cart', () => {
    // Add any item to the cart
    cy.get('.inventory_item').first().find('.btn_primary').click();
});

When('I navigate to the shopping cart', () => {
    // Navigate to the shopping cart
    cy.get('.shopping_cart_link').click();
});

Then('the item added should be displayed in the cart', () => {
    // Ensure that the item added is displayed in the cart
    cy.get('.cart_item').should('have.length', 1); // Assuming only one item is added
});
