Feature: This is a feature
  Feature description

  Background:
    Given a list of 10 users

  Scenario: Get data from valid user
    Given user ID 10
    When I try to load data from user
    Then I should receive user data

  Scenario: Get data from another valid user and save attachments
    Given user ID 9
    When I try to load data from user
    Then I should receive user data
    * I attach some test info
