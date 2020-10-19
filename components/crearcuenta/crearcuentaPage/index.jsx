import React from "react";
import { Iniciarsesion } from "./Iniciarsesion";
import { Crearcuenta } from "./crearcuenta";
import { Grid, Hidden, Button } from "@material-ui/core";
import { Mobilepage } from "./mobilepage";
import classes from "./index.module.css";
import { Steppercomponent } from "../../common";
import Link from "next/link";

const Crearcuentapage = () => {
  return (
    <div className={classes.parentdiv}>
      <div className={classes.emptydiv}></div>
      <Grid justify="center" className={classes.steptime} container>
        <Grid item xs={12} sm={12} md={7} lg={5}>
          <Steppercomponent />
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}>
          <div className={classes.timediv}>8:21</div>
        </Grid>
      </Grid>
      <Grid justify="center" className={classes.maingrid} container>
        <Hidden only={["xs", "sm"]}>
          <Grid
            className={classes.Crearcuentagrid}
            item
            xs={12}
            sm={5}
            md={7}
            lg={6}
          >
            <Crearcuenta />
          </Grid>
          <Grid
            className={classes.Iniciarsesiongrid}
            style={{ margin: "0 1rem" }}
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
          >
            <Iniciarsesion />
          </Grid>
        </Hidden>
      </Grid>
      <Hidden only={["md", "lg", "xl"]}>
        <Mobilepage />
      </Hidden>
      <Grid justify="center" className={classes.bottombuttongrid} container>
        <Grid item>
          <Link href='/confirmacion'>
            <Button  variant="contained">
              Continuar como invitado
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
export { Crearcuentapage };
