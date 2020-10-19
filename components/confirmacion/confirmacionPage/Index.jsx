import React from "react";
import { Boletos } from "./boletos";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { boletosData } from "../../../data";
import { DescargarButton } from "./button";
import { color } from "../../../constant";
import { Brands } from "./brands";
import { Mailbox } from "./mailbox";
import { Steppercomponent } from "../../common";
import classes from "./index.module.css";
import brandconfirmacionCSS from "./brands/brandsconfirmacion.module.css";

const ConfirmacionPage = () => {
  const styles = {
    heading: {
      color: color.heading,
      fontWeight: "bold",
      padding: "0.5rem 0",
    },
    subhead1: {
      color: color.heading,
      padding: "1rem 0",
    },
    subhead2: {
      color: color.heading,
    },
    para: {
      color: color.heading,
      padding: "0.3rem 0",
      margin: "3rem 0",
    },
  };

  return (
    <div>
      <div className={classes.confiremptydiv}></div>
      <Grid justify="center" className={classes.stepdiv} container>
        <Grid item xs={12} sm={12} md={7} lg={5}>
          <Steppercomponent />
        </Grid>
      </Grid>
      <div className={classes.main}>
        <div>
          <img
            className={classes.eagle}
            src="./images/confirmacion/eagle.jpg"
          />
        </div>
        <Typography style={styles.heading} variant="h4">
          ¡Gracias Nacim!
        </Typography>
        <Typography style={styles.heading} variant="h5">
          Asistirás a Fórmula 1- Gran Premio de la Ciudad de México
        </Typography>

        <Grid style={{ margin: "2rem 0" }} container>
          <Grid item xs={12} sm={12} md={7}>
            <Typography style={styles.heading} variant="h5">
              Número de confirmación:
              <strong style={{ color: "#0CD5A2" }}>647-993-983</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Mailbox />
          </Grid>
        </Grid>

        <Typography style={styles.heading} variant="h6">
          Boletos
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={5}>
            {boletosData.map((data) => (
              <Boletos
                key={data.codeno}
                name={data.name}
                codeno={data.codeno}
                amount={data.amount}
              />
            ))}
          </Grid>
        </Grid>

        <DescargarButton />

        <Brands classes={brandconfirmacionCSS} />
        <Hidden only="xs">
          <Typography style={styles.heading} variant="h6">
            Datos personales
          </Typography>
        </Hidden>
        <Hidden only="xs">
          <Typography style={styles.subhead1} variant="subtitle2">
            Nacim Shehin
          </Typography>
        </Hidden>
        <Hidden only="xs">
          <Typography style={styles.subhead2} variant="subtitle2">
            nacim@mail.com
          </Typography>
        </Hidden>
        <Typography style={styles.para} variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit ames,
          consectetur adipiscing en, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <Hidden only={["sm", "md", "lg", "xl"]}>
            <br />
            <br />
          </Hidden>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </div>
  );
};

export { ConfirmacionPage };
