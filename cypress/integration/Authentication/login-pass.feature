Feature: Authentication

    Scenario Outline: standard user can login and log out
        Given I navigate to the page: "Home"
        Then I see text "<welcomeMessage>" on the page
        When I login as a "<user>" user
        Then I see text "<text>" on the page
        When I log out
        Then I see text "<welcomeMessage>" on the page

    Examples:
        | user     | text     | welcomeMessage |
        | Standard | Products | Swag Labs      |
