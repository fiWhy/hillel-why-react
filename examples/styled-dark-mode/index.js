import React, { useState } from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import { ComponentWrapperStyled } from "./styles";
import { theme } from "./theme";

const ChildComponent = () => {
  return <ComponentWrapperStyled>Hello world</ComponentWrapperStyled>;
};

const ReactComponent = () => {
  const [value, setValue] = useState("light");

  const handleToggleTheme = () => {
    setValue(value === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[value]}>
      <button onClick={handleToggleTheme}>Switch theme</button>
      <ChildComponent />
    </ThemeProvider>
  );
};

render(<ReactComponent />, document.getElementById("root"));
