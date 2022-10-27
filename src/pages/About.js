import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const About = () => {
  const msg = useContext(UserContext);
  return (
    <>
      <div>
        <h2>About</h2>
        {msg}
      </div>
    </>
  );
};

export default About;
