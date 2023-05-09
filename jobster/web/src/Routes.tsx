// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import JobsterLayout from './layouts/JobsterLayout/JobsterLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/cv-builder" page={CvBuilderPage} name="cvBuilder" />
      <Set wrap={JobsterLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/hire" page={HirePage} name="hire" />
        <Route path="/work" page={WorkPage} name="work" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Set wrap={JobsterLayout} private unauthenticated="login">
        <Route path="/applicant-dashboard" page={ApplicantDashboardPage} name="applicantDashboard" />
        <Route path="/applicant-dashboard/cv-builder" page={CvBuilderPage} name="cvBuilder" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
