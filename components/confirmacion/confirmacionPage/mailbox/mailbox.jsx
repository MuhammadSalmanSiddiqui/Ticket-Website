import React from "react";
import { Grid, Typography } from "@material-ui/core";
import classes from "./mailbox.module.css";

const Mailbox = () => {
  return (
    <>
      <Grid className={classes.paper} container>
        <Grid item xs={3}>
          <img className={classes.img} src="./images/confirmacion/mail.png" />
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.typo1} variant="subtitle1">
            <strong>Los boletos fueron enviados a to correo</strong>
          </Typography>
          <Typography className={classes.typo2} variant="subtitle1">
            <strong>Reenviar</strong>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export { Mailbox };
