import React from "react";
function Header(props) {
  return (
    <header>
      <h1
        style={{
          backgroundColor: "lightgrey",
          color: "crimson",
          textAlign: "center"
        }}
      >
        {props.title}
      </h1>
      <p>{props.subTitle}</p>
    </header>
  );
}

export default Header;
