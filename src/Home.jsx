import React from "react";
import { Link } from "react-router-dom";
import { Common } from "./Common";

export const Home = () => {
  return (
    <>
      
      <Common
        name="Grow your business with"
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};
