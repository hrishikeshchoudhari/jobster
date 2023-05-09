import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditUserById, UpdateUserInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormUser = NonNullable<EditUserById['user']>

interface UserFormProps {
  user?: EditUserById['user']
  onSave: (data: UpdateUserInput, id?: FormUser['id']) => void
  error: RWGqlError
  loading: boolean
}

const UserForm = (props: UserFormProps) => {
  const onSubmit = (data: FormUser) => {
    props.onSave(data, props?.user?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormUser> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.user?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-0"
            name="role"
            defaultValue="ADMIN"
            defaultChecked={props.user?.role?.includes('ADMIN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Admin</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-1"
            name="role"
            defaultValue="APPLICANT"
            defaultChecked={props.user?.role?.includes('APPLICANT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Applicant</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-2"
            name="role"
            defaultValue="RECRUITER"
            defaultChecked={props.user?.role?.includes('RECRUITER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Recruiter</div>
        </div>

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>

        <TextField
          name="hashedPassword"
          defaultValue={props.user?.hashedPassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>

        <TextField
          name="salt"
          defaultValue={props.user?.salt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>

        <TextField
          name="resetToken"
          defaultValue={props.user?.resetToken}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>

        <DatetimeLocalField
          name="resetTokenExpiresAt"
          defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

        <Label
          name="applicantId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Applicant id
        </Label>

        <TextField
          name="applicantId"
          defaultValue={props.user?.applicantId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="applicantId" className="rw-field-error" />

        <Label
          name="recruiterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recruiter id
        </Label>

        <TextField
          name="recruiterId"
          defaultValue={props.user?.recruiterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="recruiterId" className="rw-field-error" />

        <Label
          name="adminId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Admin id
        </Label>

        <TextField
          name="adminId"
          defaultValue={props.user?.adminId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="adminId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
