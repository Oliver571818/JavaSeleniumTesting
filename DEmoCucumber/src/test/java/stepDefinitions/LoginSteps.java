package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	@Given("user is on login page")
	public void user_is_on_login_page() {
		System.out.println("Inside-step  user is on login page");
	}

	@When("user enters username and password")
	public void user_enters_username_and_password() {
		System.out.println("Inside-step  user enters the login credentials");
	}

	@And("click on login button")
	public void click_on_login_button() {
		System.out.println("Inside-step  user clicks login button");	
	}

	@Then("user is navigated to the homepage")
	public void user_is_navigated_to_the_homepage() {
		System.out.println("Inside-step  user is diverted to homepage");
	}

}
