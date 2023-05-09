import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'

import type { EditEducationById, UpdateEducationInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormEducation = NonNullable<EditEducationById['education']>

interface EducationFormProps {
  education?: EditEducationById['education']
  onSave: (data: UpdateEducationInput, id?: FormEducation['id']) => void
  error: RWGqlError
  loading: boolean
}

const EducationForm = (props: EducationFormProps) => {
  const onSubmit = (data: FormEducation) => {
    props.onSave(data, props?.education?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEducation> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="resumeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Resume id
        </Label>

        <TextField
          name="resumeId"
          defaultValue={props.education?.resumeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="resumeId" className="rw-field-error" />

        <Label
          name="instituteName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Institute name
        </Label>

        <TextField
          name="instituteName"
          defaultValue={props.education?.instituteName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="instituteName" className="rw-field-error" />

        <Label
          name="startYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start year
        </Label>

        <NumberField
          name="startYear"
          defaultValue={props.education?.startYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startYear" className="rw-field-error" />

        <Label
          name="endYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End year
        </Label>

        <NumberField
          name="endYear"
          defaultValue={props.education?.endYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endYear" className="rw-field-error" />

        <Label
          name="topic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Topic
        </Label>

        <TextField
          name="topic"
          defaultValue={props.education?.topic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="topic" className="rw-field-error" />

        <Label
          name="level"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Level
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="education-level-0"
            name="level"
            defaultValue="SCHOOL"
            defaultChecked={props.education?.level?.includes('SCHOOL')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>School</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="education-level-1"
            name="level"
            defaultValue="BACHELORS"
            defaultChecked={props.education?.level?.includes('BACHELORS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Bachelors</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="education-level-2"
            name="level"
            defaultValue="MASTERS"
            defaultChecked={props.education?.level?.includes('MASTERS')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Masters</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="education-level-3"
            name="level"
            defaultValue="PHD"
            defaultChecked={props.education?.level?.includes('PHD')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Phd</div>
        </div>

        <FieldError name="level" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EducationForm
