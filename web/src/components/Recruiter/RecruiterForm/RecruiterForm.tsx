import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditRecruiterById, UpdateRecruiterInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormRecruiter = NonNullable<EditRecruiterById['recruiter']>

interface RecruiterFormProps {
  recruiter?: EditRecruiterById['recruiter']
  onSave: (data: UpdateRecruiterInput, id?: FormRecruiter['id']) => void
  error: RWGqlError
  loading: boolean
}

const RecruiterForm = (props: RecruiterFormProps) => {
  const onSubmit = (data: FormRecruiter) => {
    props.onSave(data, props?.recruiter?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRecruiter> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.recruiter?.userId}
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

export default RecruiterForm
