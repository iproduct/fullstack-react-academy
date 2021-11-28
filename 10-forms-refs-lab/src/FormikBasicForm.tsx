import { Formik } from 'formik'
import React from 'react'
import { MyForm } from './MyForm';


export interface FormFields {
    email: string;
    password: string;
}

export interface FormErrors {
    email?: string;
    password?: string;
}

const validate = (values: FormFields) => {
    const errors: FormErrors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};


export const FormikBasicForm = () => {
    return (
        <Formik<FormFields>
            initialValues={{ email: "", password: "" }}
            validate={validate}
            onSubmit={
                async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values))
                }
            }>
            {props => (<MyForm {...props} />)}
        </Formik>
    )
}
