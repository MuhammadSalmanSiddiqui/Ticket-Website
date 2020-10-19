import { Paper } from "@material-ui/core";
import React from "react";
import { color } from "../../../../constant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { UserLogo } from "../../../common";
const UserIcon = ({ isMobile }) => {
  const styles = {
    paper: { background: color.paso.button, width: 40, height: 40 },
    nacim: { fontWeight: 500 },
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Paper
          className="rounded-circle  d-flex align-items-center justify-content-center"
          style={styles.paper}
        >
          <UserLogo />
        </Paper>
        <span className="mx-2" style={styles.nacim}>
          Nacim
        </span>
        <span className="mt-1">{isMobile ? null : <ExpandMoreIcon />}</span>
      </div>
    </>
  );
};

export default UserIcon;
