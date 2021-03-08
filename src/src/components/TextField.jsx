import React from 'react'
import {useField,ErrorMessage} from 'formik'

export default function TextField({label,...props}) {
  const [field,]=useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input type={props.type} {...field} {...props}/>
      <ErrorMessage name={field.name}/>
    </div>
  )
}
