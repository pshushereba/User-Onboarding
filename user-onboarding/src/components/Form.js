import React from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const UserForm = ({values, errors, touched, addUser}) => {
    return (
        <>
            <h1>Form has mounted</h1>
            <Form>
                <div>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="Name" /><br />
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field
                    component="input"
                    type="email"
                    name="email"
                    placeholder="Email" /><br />
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field
                    component="input"
                    type="password"
                    name="password"
                    placeholder="Password" /><br />
                </div>
                <label>
                    {touched.tos && errors.tos && <p>{errors.tos}</p>}
                    <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms of Service
                </label><br />
                <button type="submit">Submit!</button>
            </Form>
        </>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({name, email, password, tos}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Name is required."),
        email: Yup.string()
            .email("Email is not valid.")
            .required("Email is required."),
        password: Yup.string()
            .min(4, "Password must be at least 4 characters.")
            .required("Password is required"),
        tos: Yup.boolean()
            .required("You must accept our Terms of Service.")
    }),

    handleSubmit(values) {
        axios.post("https://reqres.in/api/users", values)
            .then((res) => {
                console.log(res);
                
            })
    }
})

export default FormikLogin(UserForm);
