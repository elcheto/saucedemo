import { When } from "cypress-cucumber-preprocessor/steps";
import { loginWithUI, logoutWithUI } from "../../fixtures/authorization/login";

When(`I login as a {string} user`, (user) => {
  loginWithUI(user);
});

When(`I log out`, () => {
  logoutWithUI();
});
