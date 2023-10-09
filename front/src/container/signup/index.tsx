import React from "react";
import "./index.css";
import "./index.scss";

import StatusBar from "../../component/statusbar";
import Title from "../../component/title";
import BackPage from "../../component/backpage";
import FormCreate from "../../component/form-create";

import Page from "../../page/page";

export const SignupPage: React.FC = () => {
  return (
    <Page className="signuppage">
      <div className="box">
        <StatusBar />
        <BackPage />
      </div>
      <Title title="Sign Up" desctiption="Choose a registration method" />
      <FormCreate button="Continue" />
    </Page>
  );
};

export default SignupPage;
