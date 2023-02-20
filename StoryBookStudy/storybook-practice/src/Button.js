import React from "react";
import styled from "style-components";

const StyledButton = styled.button`
  backgroun: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

const Button = ({ color, size, text }) => (
  <StyledButton color={color} size={size}>
    {text}
  </StyledButton>
);

export default Button;
