import { Formik } from 'formik'
import React from 'react'
import { MyForm } from './MyForm';


export interface FormFields {
    email: string
}

export const FormikBasicForm = () => {
    return (
        <Formik<FormFields>
        initialValues={{email: ""}} 
        onSubmit={
            async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values))
            }
        }>
            {props => (<MyForm {...props}/>)}
        </Formik>
    )
}
