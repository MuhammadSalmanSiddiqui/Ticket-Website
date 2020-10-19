import React, { useState } from "react";
import { Input } from "../Input";
import { color } from "../../../../constant";
import { Button, Hidden } from "@material-ui/core";
import classes from "./Iniciarsesion.module.css";
import {
  IniciarseionInputs,
  IniciarinitialValues,
  IniciarvalidationSchema,
} from "../../../../data";
import { Form, Formik } from "formik";

const Iniciarsesion = () => {
  const [onCheck, setOnCheck] = useState(false);
  return (
    <>
      <div className={classes.Iniciarmain}>
        <Hidden only={["xs", "sm"]}>
          <h3 className={classes.Iniciarheading}>¿Ya tienes cuenta?</h3>
        </Hidden>
        <div className={classes.Iniciartextbox}>
          <Formik
            initialValues={IniciarinitialValues}
            validationSchema={IniciarvalidationSchema}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                {IniciarseionInputs.map((Inputdata) => (
                  <Input
                    key={Inputdata.name}
                    label={Inputdata.label}
                    labelcolor={Inputdata.labelcolor}
                    type={Inputdata.type}
                    name={Inputdata.name}
                    value={values[Inputdata.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ))}
              </Form>
            )}
          </Formik>
        </div>
        <div className={classes.checkboxdiv}>
          <input
            className={classes.inputcheckbox}
            type="checkbox"
            onChange={(e) => setOnCheck(e.target.checked)}
          />
          <label className={classes.checkboxlabel}>Recuerdame</label>
        </div>
      </div>

      {!onCheck ? (
        <div className={classes.Errordiv}>
          <div style={{ fontSize: "0.8rem" }}>
            el correo o la contraseña es incorrecta
          </div>
        </div>
      ) : null}

      <div className={classes.Iniciarbuttondiv}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "white",
            width: "95%",
            marginBottom: "1rem",
            padding: "0.6rem",
            color: color.secondary,
          }}
        >
          Iniciar sesión
        </Button>
        <p>Olvide mi contraseña </p>
      </div>
    </>
  );
};

export { Iniciarsesion };
