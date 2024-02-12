Feature: Authentication

Scenario Outline: Locked user cannot login, and sees the error message
        Given I navigate to the page: "Home"
        Then I see text "<welcomeMessage>" on the page
        When I login as a "<user>" user
        Then I see text "<errorMessage>" on the page

    Examples:
        | user   | errorMessage                          | welcomeMessage |
        | Locked | Sorry, this user has been locked out. | Swag Labs      |
