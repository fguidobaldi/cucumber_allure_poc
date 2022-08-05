Feature: This is a feature
  Feature description

  Background:
    Given a list of 10 users

  @TEST
  Scenario: Get data from valid user
    Given user ID 10
    When I try to load data from user
    Then I should receive user data

  @TEST
  Scenario: Get data from invalid user
    Given user ID 1500
    When I try to load data from user
    Then I shouldn't receive user data
