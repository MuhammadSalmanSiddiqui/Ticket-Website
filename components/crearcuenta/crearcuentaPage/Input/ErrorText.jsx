import React from "react";

const Errortext = ({ children }) => {
  return (
    <div style={{ color: "red", fontSize: "0.9rem" }}>
      <img
        style={{ height: "1.4rem", margin: "0.3rem" }}
        src="./images/crearcuenta/restricted.svg"
      />
      {children}
    </div>
  );
};

export default Errortext;
