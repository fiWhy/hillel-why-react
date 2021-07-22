import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const ComponentWithTickIteration = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setValue(value + 1);
    });
  }, []);

  return <div>{value}</div>;
};

const ComponentWithIteration = () => {
  const [value, setValue] = useState(1);

  return (
    <div>
      {value}
      <div>
        <button onClick={() => setValue(value + 1)}>Increase</button>
      </div>
    </div>
  );
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
