import React from "react";
import {ErrorMessage} from "formik";
import Errortext from "./ErrorText";

const FormikField = ({ name,label,labelcolor, ...rest }) => {
  return (
    <>
     <label
        style={{
          display: "block",
          fontFamily: "Segoe UI Semibold",
          padding: "0.2rem",
          marginBottom: "-0.5px",
          color: labelcolor,
        }}
      >
        {label}
      </label>
      <input id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={Errortext} />
    </>
  );
};
export default FormikField;
