import React, { Component } from "react";
import "./homepage.scss";
import Directory from "../../component/directory/directory.component";
import { HomePageContainer } from "./homepage.styled.js";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
