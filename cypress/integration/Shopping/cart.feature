Feature: Add Item to Cart and Verify

Scenario: Add Item to Cart and Verify
    Given I am on the SauceDemo.com login page
    When I enter valid credentials
    And I add an item to the cart
    And I navigate to the shopping cart
    Then the item added should be displayed in the cart
