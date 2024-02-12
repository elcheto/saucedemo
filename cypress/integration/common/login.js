import { Given, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../fixtures/pages/LoginPage";

Given('I am on the SauceDemo.com login page', () => {
    LoginPage.visit();
});

When('I enter valid credentials User {string} Password {string}', (username, password) => {
    LoginPage.inputUsername(username);
    LoginPage.inputPassword(password);
});
