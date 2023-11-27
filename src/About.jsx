import React from "react";
import { Link } from "react-router-dom";
import { Common } from "./Common";

export const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        visit="/contact"
        btnname="Contact us"
      />
    </>
  );
};
