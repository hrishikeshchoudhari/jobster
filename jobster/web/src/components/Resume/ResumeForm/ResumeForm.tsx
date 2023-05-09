import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditResumeById, UpdateResumeInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormResume = NonNullable<EditResumeById['resume']>

interface ResumeFormProps {
  resume?: EditResumeById['resume']
  onSave: (data: UpdateResumeInput, id?: FormResume['id']) => void
  error: RWGqlError
  loading: boolean
}

const ResumeForm = (props: ResumeFormProps) => {
  const onSubmit = (data: FormResume) => {
    props.onSave(data, props?.resume?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormResume> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="applicantId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Applicant id
        </Label>

        <TextField
          name="applicantId"
          defaultValue={props.resume?.applicantId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="applicantId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ResumeForm
