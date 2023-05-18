import ButtonMain from "../components/ButtonMain";

import Header from "../components/Header";
import FormUnit from "../components/FormUnit";
import { useFormik } from "formik";
import { useState } from "react";
import { submitFormData } from "../services/api";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.subject) {
    errors.subject = "Required";
  } else if (values.subject.length > 20) {
    errors.subject = "Must be 20 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length > 200) {
    errors.message = "Must be 200 characters or less";
  }

  return errors;
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      try {
        await submitFormData(values);
        resetForm();
        setIsFormSubmitted(true);
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 3000);
      } catch (error) {
        console.log(error);
        setIsFormError(true);
        setFormErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <main className='flex flex-col justify-start items-center md:w-6/12 mx-10 md:mx-auto shadow-md  my-6 md:my-12 '>
      {isFormSubmitted && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: 10,
          }}
        >
          Thank you for your submission!
        </div>
      )}

      {isFormError && (
        <div style={{ backgroundColor: "red", color: "white", padding: 10 }}>
          {formErrorMessage}
        </div>
      )}
      <Header />
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className='mx-2 w-full px-9  py-4 space-y-4'
      >
        <FormUnit formik={formik} />
        <ButtonMain isLoading={isLoading} />
      </form>
    </main>
  );
};

export default Contact;
