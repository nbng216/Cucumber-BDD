const Person = require('../../src/shouty')
const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

Given('Lucy is located {int} metres from Sean', function (distance) {
    this.lucy = new Person
    this.sean = new Person
    this.lucy.moveTo(distance)

});


When('Sean shouts {string}', function (message) {

    this.sean.shout(message)
    this.message = message
});


Then('lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    assertThat(this.lucy.messagesHeard(), is([this.message]))
})

package hellocucumber;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import static org.junit.jupiter.api.Assertions.*;

class IsItFriday {
    static String isItFriday(String today) {
        return null;
    }
}

public class Stepdefs {
    private String today;
    private String actualAnswer;

    @Given("today is Sunday")
    public void today_is_Sunday() {
        today = "Sunday";
    }

    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_Friday_yet() {
        actualAnswer = IsItFriday.isItFriday(today);
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String expectedAnswer) {
        assertEquals(expectedAnswer, actualAnswer);
    }
}
