import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const ComponentWithTickIteration = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    
    return () => {
      clearInterval(intervalID);
    }
  }, [value]);

  return <div>{value}</div>;
};

const ReactComponent = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time?.toString()}</div>;
};

render(<ComponentWithTickIteration />, document.getElementById("root"));
