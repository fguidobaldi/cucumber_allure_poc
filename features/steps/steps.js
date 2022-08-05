const { Given, When, Then } = require('cucumber');
const { faker } = require('@faker-js/faker')
const expect = require('expect');

Given('a list of {int} users', function (int) {
    this.users = [];
    let i = 1
    while (i <= int) {
        let user = {
            id: i,
            name: faker.name.firstName,
            vehicle: faker.vehicle.vehicle
        }

        this.users.push(user)
        i++
    }
});

Given('user ID {int}', function (userID) {
    this.userID = userID       
});

When('I try to load data from user', function () {
    try {
        this.data = this.users[this.userID - 1]
    } catch {
        this.data = null;
    }
    
});

Then('I should receive user data', function () {
    expect(this.data).toBeTruthy()
});

Then("I shouldn't receive user data", function () {
    expect(this.data).toBeFalsy()
});