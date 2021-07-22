import React from "react";
import { FlexBox, Heading, Slide, CodePane } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="offwhite">Hook error</Heading>
        <CodePane
          language="jsx"
          highlightRanges={[
            [2, 2],
            [4, 8],
          ]}
        >
          {`const ComponentWithTickIteration = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setValue(value + 1);
    });
  }, []);

  return <div>{value}</div>;
};
`}
        </CodePane>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
