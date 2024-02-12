// cypress/fixtures/pages/LoginPage.js

class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    usernameField () {
        return cy.get('#user-name');
    }

    inputUsername (username) {
        this.usernameField().type(username);
    }

    passwordField () {
        return cy.get('#password');
    }

    inputPassword (password) {
        this.passwordField().type(password);
    }

    loginButton () {
        return cy.get('#login-button');
    }

    submit () {
        this.loginButton().click();
    }

    errorMessage () {
        return cy.get('.error-message-container h3[data-test="error"]');
    }
}

export default new LoginPage();
