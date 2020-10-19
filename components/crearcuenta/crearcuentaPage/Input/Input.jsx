import React from "react";
import classes from "./Input.module.css";
import FormikField from "./FormikField";
const Input = (props) => {
  const {
    initialValues,
    validationSchema,
    label,
    labelcolor,
    type,
    name,
    ...rest
  } = props;
  return (
    <>
      <FormikField {...props} className={classes.form__input} />
    </>
  );
};

export { Input };
