import userData from "./userData.json";
import { clickButton } from "../elements/button.js";
import { enterIntoField } from "../elements/field.js";
import { waitForAllXhrRequests } from "../helpers/wait.js";

export const loginWithUI = (user) => {
  cy.log("Step--------------Logging in as user: " + user);
  enterIntoField("Username", userData[user].Username);
  enterIntoField("Password", userData[user].Password);
  clickButton("Login");
  waitForAllXhrRequests();
};

export const logoutWithUI = () => {
  cy.log("Step--------------Logging out");
  clickButton("Menu");
  clickButton("Logout");
  waitForAllXhrRequests();
};
