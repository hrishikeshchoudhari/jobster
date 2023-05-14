import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditApplicantById, UpdateApplicantInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormApplicant = NonNullable<EditApplicantById['applicant']>

interface ApplicantFormProps {
  applicant?: EditApplicantById['applicant']
  onSave: (data: UpdateApplicantInput, id?: FormApplicant['id']) => void
  error: RWGqlError
  loading: boolean
}

const ApplicantForm = (props: ApplicantFormProps) => {
  const onSubmit = (data: FormApplicant) => {
    props.onSave(data, props?.applicant?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormApplicant> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.applicant?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ApplicantForm
