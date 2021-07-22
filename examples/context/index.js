import React, { useCallback, useContext, useEffect, useState } from "react";
import { render } from "react-dom";
import { contextValue, DataContext } from "./context";

const ChildComponent = () => {
  const menu = useContext(DataContext);

  return (
    <ul>
      {menu.map((el, idx) => {
        return <li key={idx}>{el.label}</li>;
      })}
    </ul>
  );
};

const ReactComponent = () => {
  const [value, setValue] = useState("firstList");

  const handleToggleList = () => {
    setValue(value === "firstList" ? "secondList" : "firstList");
  };

  return (
    <DataContext.Provider value={contextValue[value]}>
      <button onClick={handleToggleList}>Change value</button>
      <ChildComponent />
    </DataContext.Provider>
  );
};

render(<ReactComponent />, document.getElementById("root"));
