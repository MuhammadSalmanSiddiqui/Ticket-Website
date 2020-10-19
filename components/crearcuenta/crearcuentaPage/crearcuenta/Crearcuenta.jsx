import React from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import { color } from "../../../../constant";
import {
  CrearcuentaInputs,
  initialValues,
  validationSchema,
} from "../../../../data";
import Button from "@material-ui/core/Button";
import classes from "./Crearcuenta.module.css";
import { Form, Formik } from "formik";

const Crearcuenta = () => {
  return (
    <div className={classes.maindiv}>
      <h3 className={classes.heading}>Crear cuenta</h3>

      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Grid spacing={2} container>
              {CrearcuentaInputs.map((Inputdata) => (
                <Grid key={Inputdata.label} item xs={12} sm={6} md={6}>
                  <Input
                    label={Inputdata.label}
                    labelcolor={Inputdata.labelcolor}
                    type={Inputdata.type}
                    name={Inputdata.name}
                    value={values[Inputdata.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
              ))}
            </Grid>
          </Form>
        )}
      </Formik>

      <div className={classes.Crearcheckboxdiv}>
        <input className={classes.Crearinputcheckbox} type="checkbox" />
        <label className={classes.agreement}>
          Al crear tu cuenta estas de acuerdo con lost{" "}
          <strong style={{ color: color.secondary }}>
            Términos y Condiciones{" "}
          </strong>
          y el
          <strong style={{ color: color.secondary }}>
            {" "}
            Aviso de Privacidad
          </strong>
        </label>
      </div>
      <div className={classes.Crearbuttondiv}>
        <Button
          variant="contained"
          style={{
            margin: "0.6rem 0 1.5rem 0",
            padding: "0.6rem 3rem",
            backgroundColor: color.secondary,
            color: "#fff",
          }}
        >
          Crear cuenta
        </Button>
      </div>
    </div>
  );
};

export { Crearcuenta };
