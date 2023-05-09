import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditSkillById, UpdateSkillInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormSkill = NonNullable<EditSkillById['skill']>

interface SkillFormProps {
  skill?: EditSkillById['skill']
  onSave: (data: UpdateSkillInput, id?: FormSkill['id']) => void
  error: RWGqlError
  loading: boolean
}

const SkillForm = (props: SkillFormProps) => {
  const onSubmit = (data: FormSkill) => {
    props.onSave(data, props?.skill?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSkill> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="employmentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employment id
        </Label>

        <TextField
          name="employmentId"
          defaultValue={props.skill?.employmentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employmentId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.skill?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SkillForm
