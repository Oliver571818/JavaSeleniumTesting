$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/login.feature");
formatter.feature({
  "name": "feature to test the login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeFeature"
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeFeature"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_is_navigated_to_the_homepage()"
});
formatter.result({
  "status": "passed"
});
});