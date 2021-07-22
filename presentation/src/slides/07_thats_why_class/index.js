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
              [4, 4],
              [5, 7],
              [10, 10],
            ]}
          >
            {`import React, { PureComponent } from "react";
import { render } from "react-dom";

class ReactComponent extends PureComponent {
  render() {
    return <div>Hello world</div>;
  }
}

render(<ReactComponent />, document.getElementById("root"));
`}
          </CodePane>
        </Appear>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
