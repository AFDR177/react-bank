import React from "react";
import Heading from "../../component/heading";
import StatusBarWhite from "../../component/statusbar-white";
import Button from "../../component/button";

import Page from "../../page/page";
import Kerfin from "./kerfin.png";
import Indikator from "./indikator.svg";

import "./index.css";

export const WellcomePage: React.FC = () => {
  return (
    <Page className="welcomepage">
      <div className="pagebackground">
        <StatusBarWhite />
        <Heading title="Hello!">Welcome to bank app!</Heading>
        <img src={Kerfin} alt="kerfin" className="kerfin" />
      </div>
      <div className="buttons">
        <Button className="button">Sign Up</Button>
        <Button className="button--outline">Sign In</Button>
      </div>
      <img src={Indikator} alt="ind" className="indikator" />
    </Page>
  );
};

export default WellcomePage;
