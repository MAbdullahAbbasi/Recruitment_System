import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
        password: Yup.string().max(8, 'Password must be at most 8 characters').required('Required'),

      })}
      onSubmit={(values, actions) => {
        // Handle form submission...
      }}
    >
      <Form>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Sign In</button>
      </Form>
    </Formik>
  );
};

export default Login;
