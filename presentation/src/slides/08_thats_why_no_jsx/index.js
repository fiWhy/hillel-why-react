import React from "react";
import { CodePane, FlexBox, Appear, Heading, Slide } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          language="html"
          textSize={20}
          highlightRanges={[
            [3, 10],
            [15, 17],
            [19, 22],
          ]}
        >
          {`<!-- Something -->
  <head>
    <script
      crossorigin
      src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
  </head>
  <!-- Something -->
  <body>
    <script>
      const ReactComponent = () => {
        return React.createElement("div", null, "Hello world");
      };

      ReactDOM.render(
        React.createElement(ReactComponent, null, null),
        document.getElementById("root")
      );
    </script>
  </body>
  <!-- Something -->
`}
        </CodePane>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
