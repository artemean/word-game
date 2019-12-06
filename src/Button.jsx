import React, { useState } from "react";

const Button = ({ text, onClick }) => {
  return <li onClick={onClick(text)}>{text}</li>;
};

export default Button;
