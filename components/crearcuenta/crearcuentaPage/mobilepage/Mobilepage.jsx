import React from "react";
import { Crearcuenta } from "../crearcuenta";
import { Iniciarsesion } from "../Iniciarsesion";
import { Tabs, Tab } from "react-bootstrap";
import { color } from "../../../../constant";
import classes from "./mobilepage.module.css";

const Mobilepage = (props) => {
  return (
    <div className={classes.Tabcomponent}>
      <Tabs
        className="nav nav-tabs nav-justified"
        defaultActiveKey="Iniciar sesion"
        id="uncontrolled-tab-example"
      >
        <Tab
          className={classes.Tabsmain}
          eventKey="Crear cuenta"
          title="Crear cuenta"
        >
          <Crearcuenta />
        </Tab>
        <Tab
          className={classes.Tabsmain}
          style={{ backgroundColor: color.secondary }}
          eventKey="Iniciar sesion"
          title="Iniciar Sesion"
        >
          <Iniciarsesion />
        </Tab>
      </Tabs>
    </div>
  );
};

export { Mobilepage };
