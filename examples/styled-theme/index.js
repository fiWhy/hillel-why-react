import React, { useState } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import { ComponentWrapperStyled } from "./styles";
import { theme } from "./theme";

const ChildComponent = () => {
  return <ComponentWrapperStyled>Hello world</ComponentWrapperStyled>;
};

const ReactComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChildComponent />
    </ThemeProvider>
  );
};

render(<ReactComponent />, document.getElementById("root"));
