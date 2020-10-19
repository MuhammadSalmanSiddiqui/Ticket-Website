import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const DescargarButton = () => {
  return (
    <>
      <Link href='/'>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ padding: "0.7rem 1rem" }}
        startIcon={
          <img
            style={{ height: "1.5rem", paddingRight: "1rem" }}
            src="./images/confirmacion/downloadwhite.svg"
          />
        }
      >
        Descargar todos
      </Button>
      </Link>
    </>
  );
};

export { DescargarButton };
