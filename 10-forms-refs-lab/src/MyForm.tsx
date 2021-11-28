import { FormikProps } from 'formik'
import React from 'react'
import { FormFields } from './FormikBasicForm'


export const MyForm:React.FC<FormikProps<FormFields>> = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email" 
            />
            <button type="submit">Submit</button>
        </form>
    )
}
