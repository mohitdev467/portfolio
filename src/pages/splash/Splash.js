import React, { useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash() {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </div>
  );
}

function Splash() {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash />
  );
}

export default Splash;
