Feature: BrowserStack Demo

  Scenario: Verify login
    Given I am on the website 'https://www.bstackdemo.com'
    Then the BrowserStack Demo header should be displayed


  Scenario: Add product to cart
    Given I am on the website 'https://www.bstackdemo.com'
    When I select a product and click on 'Add to cart' button
    Then the product should be added to cart