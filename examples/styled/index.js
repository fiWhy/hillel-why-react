import React, { useState } from "react";
import { render } from "react-dom";

import { ComponentWrapperStyled } from "./styles";

const ReactComponent = () => {
  return <ComponentWrapperStyled>Hello there!</ComponentWrapperStyled>;
};

render(<ReactComponent />, document.getElementById("root"));
