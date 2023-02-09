const { Given, When, Then } = require('@cucumber/cucumber')

Given('Lucy is located {int} metres from Scena', function (distance) {
    // Given('Lucy is located {float} metres from Scena', function (float) {
    // Write code here that turns the phrase above into concrete actions
    console.log(distance)
    return 'pending';
});


When('Sean shouts {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
})