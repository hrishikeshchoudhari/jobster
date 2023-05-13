import { useState } from 'react'

import type { EditEmploymentById, UpdateEmploymentInput } from 'types/graphql'
// import type { CreateSkillInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEmployment = NonNullable<EditEmploymentById['employment']>

interface EmploymentFormProps {
  employment?: EditEmploymentById['employment']
  onSave: (data: UpdateEmploymentInput, id?: FormEmployment['id']) => void
  error: RWGqlError
  loading: boolean
}

const EmploymentForm = (props: EmploymentFormProps) => {
  const [skillNames, setSkillNames] = useState(
    props.employment?.skills?.map((skill) => skill.name) || ['']
  )

  const addSkillField = () => {
    setSkillNames([...skillNames, ''])
  }

  const removeSkillField = (index) => {
    const newSkillNames = [...skillNames]
    newSkillNames.splice(index, 1)
    setSkillNames(newSkillNames)
  }

  const handleSkillChange = (index, event) => {
    const newSkillNames = [...skillNames]
    newSkillNames[index] = event.target.value
    setSkillNames(newSkillNames)
  }

  const onSubmit = async (data: FormEmployment) => {
    const skillFields = Object.entries(data).filter(([key, value]) =>
      key.startsWith('skill')
    )
    const skills = skillFields.map(([key, value]) => ({ name: value }))
    const otherData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => !key.startsWith('skill'))
    )
    // first, update the employment without the skills
    const savedEmployment = await props.onSave(otherData, props?.employment?.id)

    for (const skill of skills) {
      await createSkill({ employmentId: savedEmployment.id, name: skill })
    }
  }

  // const onSubmit = (data: FormEmployment) => {
  //   props.onSave(data, props?.employment?.id)
  // }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEmployment> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.employment?.resumeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="resumeId" className="rw-field-error" />

        <Label
          name="employerName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Employer name
        </Label>

        <TextField
          name="employerName"
          defaultValue={props.employment?.employerName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="employerName" className="rw-field-error" />

        <Label
          name="startDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start date
        </Label>

        <DatetimeLocalField
          name="startDate"
          defaultValue={formatDatetime(props.employment?.startDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startDate" className="rw-field-error" />

        <Label
          name="endDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>

        <DatetimeLocalField
          name="endDate"
          defaultValue={formatDatetime(props.employment?.endDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endDate" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>

        <TextField
          name="role"
          defaultValue={props.employment?.role}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.employment?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        {skillNames.map((skillName, index) => (
          <div key={index}>
            <Label
              name={`skill${index}`}
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Skill {index + 1}
            </Label>
            <TextField
              name={`skill${index}`}
              value={skillName}
              onChange={(event) => handleSkillChange(index, event)}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />
            <button type="button" onClick={() => removeSkillField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkillField}>
          Add Skill
        </button>

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmploymentForm
