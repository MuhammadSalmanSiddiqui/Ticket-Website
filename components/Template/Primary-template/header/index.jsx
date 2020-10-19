import React from "react";
import { Navbar, Nav, Button, FormControl, Form } from "react-bootstrap";
import { MatchBoletosLogo } from "../../../common";
import { color } from "../../../../constant";
import { useMediaQuery } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useRouter } from "next/router";
import UserIcon from "./userIcon";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:850px)");
  const styles = {
    rootNav: { boxShadow: `0 10px 12px -2px ${color.header.boxShadow}` },
    Brand: { width: 150 },
    form: { position: "relative", width: "24em" },
    searchLogo: { position: "absolute" },
    textBox: {
      fontSize: 11,
      paddingTop: 20,
      paddingBottom: 20,
      boxShadow: ` 0px 2px 10px 2px ${color.header.boxShadow}`,
      border: 0,
      borderRadius: 8,
    },
    ayuda: { fontSize: 12, fontWeight: 700, marginRight: 60 },
    button: {
      background: color.header.button,
      fontSize: 12,
      borderRadius: 10,
    },
    mobileButton: { cursor: "pointer" },
  };
  return (
    <>
      <Navbar style={styles.rootNav} className="">
        <Link href="/">
          <a>
            <Navbar.Brand style={styles.Brand}>
              <MatchBoletosLogo />
            </Navbar.Brand>
          </a>
        </Link>
        <Nav className="mr-auto">
          {isMobile ? null : (
            <Form inline style={styles.form} className="ml-4">
              <img
                src="images/template/search.svg"
                style={styles.searchLogo}
                className="p-2 pl-3"
              />
              <FormControl
                type="text"
                placeholder="Busca por evento, artista, ciudad"
                style={styles.textBox}
                className="mr-sm-2 pl-5 w-100 "
              />
            </Form>
          )}
        </Nav>
        <div className="d-flex justify-content-between align-items-center">
          {isMobile ? null : <span style={styles.ayuda}>Ayuda</span>}
          {!(router.pathname === "/confirmacion") ? (
            <Button
              style={styles.button}
              onClick={() => router.push("/crearcuenta")}
              className="py-2"
            >
              Iniciar sesión
            </Button>
          ) : (
            <UserIcon isMobile={isMobile} />
          )}
          {isMobile ? (
            <span className="mx-2" style={styles.mobileButton}>
              <DehazeIcon />
            </span>
          ) : null}
        </div>
      </Navbar>
    </>
  );
};

export { Header };
