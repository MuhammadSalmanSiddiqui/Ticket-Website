import React from "react";
import { Grid } from "@material-ui/core";

const Brands = ({ classes }) => {
  return (
    <>
      <Grid className={classes.brands} container>
        <Grid item xs={4} sm={4} lg>
          <img
            className={classes.first3imgs}
            src="./images/confirmacion/redbull.png"
          />
        </Grid>
        <Grid item xs={4} sm={4} lg>
          <img
            className={classes.first3imgs}
            src="./images/confirmacion/ferarari.png"
          />
        </Grid>
        <Grid item xs={4} sm={4} lg>
          <img
            className={classes.first3imgs}
            src="./images/confirmacion/Mercedes-Benz.png"
          />
        </Grid>
        <Grid item xs={6} sm={6} lg>
          <img className={classes.remimgs} src="./images/confirmacion/p.png" />
        </Grid>
        <Grid item xs={6} sm={6} lg>
          <img
            className={classes.remimgs}
            src="./images/confirmacion/mclaren.png"
          />
        </Grid>
      </Grid>
    </>
  );
};

export { Brands };
