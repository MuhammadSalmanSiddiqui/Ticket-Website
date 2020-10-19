import React from "react";

const MyButton = ({ children, variant, textVariant,onClick }) => {
  const styles = {
    button: {
      background: "black",
      color: "white",
      padding: "12px 35px",
      border: 0,
      borderRadius: 6,
      ...variant,
    },
    text: { fontSize: 11, fontWeight: 500, ...textVariant },
  };
  return (
    <>
      <button
        style={styles.button}
        className="d-flex justify-content-center"
        onClick={onClick}
      >
        <span style={styles.text}>{children}</span>
      </button>
    </>
  );
};

export { MyButton };
