import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Can contain only a max chars of 15")
            .required("Required")
            .min(2, "The minimun number of characters is 2"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .required("Required")
            .min(6, "Password must contain at least 6 characters"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must be equal")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
            />

            <MyTextInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter email address"
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="*****"
            />

            <MyTextInput
              label="Confirm password"
              name="password2"
              type="password"
              placeholder="*****"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
