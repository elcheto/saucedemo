Feature: Sort Items in Descending Order

Scenario: Sort Items in Descending Order
    Given I am on the SauceDemo.com login page
    When I enter valid credentials for the Standard user
    And I login
    And I sort the items in descending order
    Then the items should be displayed in descending order
