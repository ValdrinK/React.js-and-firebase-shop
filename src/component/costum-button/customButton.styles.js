import styled, { css } from "styled-components";

const buttonGoogleSigned = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const buttonInverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const buttonStyles = props => {
  if (props.isGoogleSignIn) {
    return buttonGoogleSigned;
  }

  return props.inverted ? buttonInverted : "";
};

export const CustomButtonContainer = styled.button`

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;

    ${buttonStyles}
`;
