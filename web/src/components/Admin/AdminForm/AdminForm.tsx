import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditAdminById, UpdateAdminInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormAdmin = NonNullable<EditAdminById['admin']>

interface AdminFormProps {
  admin?: EditAdminById['admin']
  onSave: (data: UpdateAdminInput, id?: FormAdmin['id']) => void
  error: RWGqlError
  loading: boolean
}

const AdminForm = (props: AdminFormProps) => {
  const onSubmit = (data: FormAdmin) => {
    props.onSave(data, props?.admin?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAdmin> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.admin?.userId}
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

export default AdminForm
