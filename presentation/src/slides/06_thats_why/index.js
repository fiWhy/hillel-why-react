import React from "react";
import { CodePane, FlexBox, Appear, Heading, Slide } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="offwhite">That's why</Heading>
        <Appear>
          <CodePane
            language="jsx"
            highlightRanges={[
              [1, 1],
              [2, 2],
              [4, 6],
              [8, 8],
            ]}
          >
            {`import React from "react";
import { render } from "react-dom";

const ReactComponent = () => {
  return <div>Hello world</div>;
};

render(<ReactComponent />, document.getElementById("root"));
`}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
