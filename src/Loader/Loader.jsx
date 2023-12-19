import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div class="lds-roller" style={{ marginTop: "200px" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
