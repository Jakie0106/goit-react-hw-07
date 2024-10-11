import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import css from "./contactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const tellValid = /^\d{3}-\d{3}-\d{4}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(tellValid, "It`s not a number!")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const handleSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.formItem}>
            <label htmlFor="name">Name</label>
            <Field className={css.input} name="name" type="text" id="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.formItem}>
            <label htmlFor="number">Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id="number"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.addBtn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
