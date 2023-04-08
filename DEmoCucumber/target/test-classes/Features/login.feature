@SmokeFeature
Feature: feature to test the login functionality

  @smoketest
  Scenario: Check login is successful with credentials
    Given user is on login page
    When user enters username and password
    And click on login button
    Then user is navigated to the homepage
