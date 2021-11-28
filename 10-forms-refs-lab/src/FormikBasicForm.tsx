import { Formik, FormikErrors } from 'formik'
import React from 'react'
import { MyForm } from './MyForm';
import * as Yup from 'yup';


export interface FormFields {
    email: string;
    password: string;
    username: string;
}

export interface FormErrors {
    email?: string;
    password?: string;
    username?: string;
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const validate = (values: FormFields): Promise<FormikErrors<FormErrors>> => {
    const errors: FormErrors = {};

    // Async Validation
    return new Promise(resolve => {
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
            errors.password = 'Invalid password';
        }
        if (errors.email || errors.password) {
            resolve(errors)
        } else {
            sleep(1000).then(() => {
                if (['admin', 'null', 'god'].includes(values.username)) {
                    errors.username = 'Nice try';
                }
                resolve(errors);
            });
        }
    });
}

const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(15, 'Too Long!')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Invalid password - should conatin at least 1 digit and 1 special sign")
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  

export const FormikBasicForm = () => {
    return (
        <Formik<FormFields>
            initialValues={{ email: "", password: "", username: "" }}
            // validate={validate}
            validationSchema={SignupSchema}
            validateOnChange={false}
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
