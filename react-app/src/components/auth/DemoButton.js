import React from "react";
import { demo } from "../../services/auth";

const DemoButton = ({ setAuthenticated, authenticated }) => {
  const demobutton = async (e) => {
    await demo();
    setAuthenticated(true);
    window.location.reload(false);
  };

  return authenticated ? (
    ""
  ) : (
    <button className="navBtn" onClick={demobutton}>
      Login as a Demo User
    </button>
  );
};

export default DemoButton;
