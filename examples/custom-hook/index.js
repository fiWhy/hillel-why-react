import React, { useCallback, useEffect, useState } from "react";
import { render } from "react-dom";



// const useListen = (name, target, handler) => {
//   const handlerRef = useRef(null);

//   useEffect(() => {
//     handlerRef.current = handler;
//   }, [handler]);

//   const handleEvent = useCallback(() => {
//     handlerRef.current();
//   }, [])

//   useEffect(() => {
//     target.addEventListener(name, handleEvent);

//     return () => {
//       target.removeEventListener(name, handleEvent);
//     }
//   }, [name, target, handleEvent]);
// }



const ReactComponent = () => {
  const [time, setTime] = useState();

  useListen('mousemove', window, () => {
    console.log('Hello!!!');
  })

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div className={styles.example}>{time?.toString()}</div>;
};

render(<ReactComponent />, document.getElementById("root"));
