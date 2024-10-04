import React from "react";
import s from "../SearchBar/SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className={s.input} name="query" />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
