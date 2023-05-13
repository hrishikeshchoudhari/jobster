// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import InternalLayout from './layouts/InternalLayout/InternalLayout'
import JobsterLayout from './layouts/JobsterLayout/JobsterLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Skills" titleTo="skills" buttonLabel="New Skill" buttonTo="newSkill">
        <Route path="/skills/new" page={SkillNewSkillPage} name="newSkill" />
        <Route path="/skills/{id}/edit" page={SkillEditSkillPage} name="editSkill" />
        <Route path="/skills/{id}" page={SkillSkillPage} name="skill" />
        <Route path="/skills" page={SkillSkillsPage} name="skills" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Employments" titleTo="employments" buttonLabel="New Employment" buttonTo="newEmployment">
        <Route path="/employments/new" page={EmploymentNewEmploymentPage} name="newEmployment" />
        <Route path="/employments/{id}/edit" page={EmploymentEditEmploymentPage} name="editEmployment" />
        <Route path="/employments/{id}" page={EmploymentEmploymentPage} name="employment" />
        <Route path="/employments" page={EmploymentEmploymentsPage} name="employments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Educations" titleTo="educations" buttonLabel="New Education" buttonTo="newEducation">
        <Route path="/educations/new" page={EducationNewEducationPage} name="newEducation" />
        <Route path="/educations/{id}/edit" page={EducationEditEducationPage} name="editEducation" />
        <Route path="/educations/{id}" page={EducationEducationPage} name="education" />
        <Route path="/educations" page={EducationEducationsPage} name="educations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Resumes" titleTo="resumes" buttonLabel="New Resume" buttonTo="newResume">
        <Route path="/resumes/new" page={ResumeNewResumePage} name="newResume" />
        <Route path="/resumes/{id}/edit" page={ResumeEditResumePage} name="editResume" />
        <Route path="/resumes/{id}" page={ResumeResumePage} name="resume" />
        <Route path="/resumes" page={ResumeResumesPage} name="resumes" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Admins" titleTo="admins" buttonLabel="New Admin" buttonTo="newAdmin">
        <Route path="/admins/new" page={AdminNewAdminPage} name="newAdmin" />
        <Route path="/admins/{id}/edit" page={AdminEditAdminPage} name="editAdmin" />
        <Route path="/admins/{id}" page={AdminAdminPage} name="admin" />
        <Route path="/admins" page={AdminAdminsPage} name="admins" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Recruiters" titleTo="recruiters" buttonLabel="New Recruiter" buttonTo="newRecruiter">
        <Route path="/recruiters/new" page={RecruiterNewRecruiterPage} name="newRecruiter" />
        <Route path="/recruiters/{id}/edit" page={RecruiterEditRecruiterPage} name="editRecruiter" />
        <Route path="/recruiters/{id}" page={RecruiterRecruiterPage} name="recruiter" />
        <Route path="/recruiters" page={RecruiterRecruitersPage} name="recruiters" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Applicants" titleTo="applicants" buttonLabel="New Applicant" buttonTo="newApplicant">
        <Route path="/applicants/new" page={ApplicantNewApplicantPage} name="newApplicant" />
        <Route path="/applicants/{id}/edit" page={ApplicantEditApplicantPage} name="editApplicant" />
        <Route path="/applicants/{id}" page={ApplicantApplicantPage} name="applicant" />
        <Route path="/applicants" page={ApplicantApplicantsPage} name="applicants" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
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
      <Set wrap={InternalLayout} private unauthenticated="login">
        <Route path="/applicant-dashboard" page={ApplicantDashboardPage} name="applicantDashboard" />
        <Route path="/applicant-dashboard/cv-builder" page={CvBuilderPage} name="cvBuilder" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
