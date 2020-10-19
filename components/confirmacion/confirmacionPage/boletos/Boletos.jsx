import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import classes from './boletos.module.css'
import {color} from '../../../../constant'

const Boletos = ({name,codeno,amount}) => {
  const styles={
    childtypo:{
      color: color.secondary
    }
  }
  return (
    <>
    <div className={classes.paper}>
       <Grid container >
        <Grid item xs={6} sm={5} md={6} >
          <Typography className={classes.General}  variant="subtitle2">
            {name}
            <strong style={styles.childtypo}>
              {codeno}
            </strong>
          </Typography>
        </Grid>
        <Grid  item xs={6} sm={7} md={6} >
          <Typography className={classes.typo}  variant="subtitle2">
            Total ${amount}
          <img className={classes.img} src='./images/confirmacion/download.svg'/>
          </Typography>
        </Grid>
       </Grid>
    </div>
    </>
  );
};

export {Boletos};

