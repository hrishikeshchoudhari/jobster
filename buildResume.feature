Feature: Resume creation and entry of education and employment details

  As an applicant
  I want to be able to create a resume and enter my education and employment details
  So that I can present a comprehensive profile to potential employers

  Background:
    Given the applicant is authenticated

  Scenario: Applicant creates a new resume
    Given the applicant is on the Resume Builder page
    When the applicant clicks on "Initiate Resume"
    Then a new Resume should be created for the applicant
    And the Resume ID should be displayed on the page

  Scenario: Applicant adds education details to the resume
    Given the applicant has a created Resume
    And the applicant is on the Resume Builder page
    When the applicant clicks on "New Education"
    And fills in the education form with valid details
    And clicks on "Save"
    Then the new education details should be added to the Resume
    And the new education details should be displayed on the page

  Scenario: Applicant adds employment details to the resume
    Given the applicant has a created Resume
    And the applicant is on the Resume Builder page
    When the applicant clicks on "New Employment"
    And fills in the employment form with valid details
    And clicks on "Save"
    Then the new employment details should be added to the Resume
    And the new employment details should be displayed on the page
