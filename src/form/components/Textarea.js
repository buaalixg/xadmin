import React from 'react'
import { Field } from 'redux-form'
import { FormControl } from 'react-bootstrap'

export default ({ input, label, meta: { touched, error }, field, group: FieldGroup }) => {
  return (
    <FieldGroup
      label={label}
      error={touched && error}
      input={input} field={field}
      >
      <FormControl componentClass="textarea" {...input} {...field.attrs} />
    </FieldGroup>
  )
}