import React from "react";

import "./signInAndSingUp.styles.scss";

import SignIn from "../../component/signIn/signIn.component";
import SignUp from "../../component/signup/sign-up.component";

const SignInAndSingUp = () => (
  <div className="sing-in-and-sing-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSingUp;
