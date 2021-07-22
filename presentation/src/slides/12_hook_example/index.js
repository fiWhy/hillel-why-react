import React from "react";
import { FlexBox, Heading, Slide, CodePane } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="offwhite">Hook example</Heading>
        <CodePane
          language="jsx"
          highlightRanges={[
            [2, 2],
            [4, 8],
          ]}
        >
          {`const ReactComponent = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time?.toString()}</div>;
};`}
        </CodePane>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
