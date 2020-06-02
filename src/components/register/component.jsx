import React from 'react';
import { Formik } from 'formik';
import Button from '../UI/button';
import './styles.scss';
import { registerValidation, registerFormInitialValues } from '../../helpers/validations';
import { register } from '../../api/auth';

const ErrorMsg = ({ text }) => (
    <span className="error-msg">{text}</span>
)

export default class extends React.Component {
    submitForm = async (values) => {
        try {
            await register(values);
            this.props.history.push('/login');
        } catch (error) {
            //Handling error
        }
    }

    render() {
        return (
            <div className="register-form">
                <h1>Register</h1>
                <Formik
                    validate={registerValidation}
                    onSubmit={this.submitForm}
                    initialValues={registerFormInitialValues}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Username"
                        />
                        {errors.username && touched.username && <ErrorMsg text={errors.username} />}
                        <input 
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.event_date}
                            placeholder="Email"
                        />
                        {errors.email && touched.email && <ErrorMsg text={errors.email} />}
                        <input 
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.event_time}
                            placeholder="Password"
                        />
                        {errors.password && touched.password && <ErrorMsg text={errors.password} />}
                        <input 
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            placeholder="Firstname"
                        />
                        {errors.firstname && touched.firstname && <ErrorMsg text={errors.firstname} />}
                        <input 
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.address}
                            placeholder="Lastname"
                        />
                        {errors.lastname && touched.lastname && <ErrorMsg text={errors.lastname} />}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
                </Formik>
            </div>
        )
    }
}