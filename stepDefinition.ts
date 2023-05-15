const { Given, When, Then } = require('@cucumber/cucumber')

Given('the applicant is authenticated', function () {
  // authentication logic here
})

Given('the applicant is on the Resume Builder page', function () {
  // navigation logic here
})

When('the applicant clicks on "Initiate Resume"', function () {
  // action logic here
})

Then('a new Resume should be created for the applicant', function () {
  // assertion logic here
})

Then('the Resume ID should be displayed on the page', function () {
  // assertion logic here
})

Given('the applicant has a created Resume', function () {
  // prerequisite logic here
})

When('the applicant clicks on "New Education"', function () {
  // action logic here
})

And('fills in the education form with valid details', function () {
  // form filling logic here
})

And('clicks on "Save"', function () {
  // action logic here
})

Then('the new education details should be added to the Resume', function () {
  // assertion logic here
})

Then('the new education details should be displayed on the page', function () {
  // assertion logic here
})

When('the applicant clicks on "New Employment"', function () {
  // action logic here
})

And('fills in the employment form with valid details', function () {
  // form filling logic here
})

Then('the new employment details should be added to the Resume', function () {
  // assertion logic here
})

Then('the new employment details should be displayed on the page', function () {
  // assertion logic here
})
