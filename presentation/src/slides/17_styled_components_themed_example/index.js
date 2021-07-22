import React from "react";
import { FlexBox, Heading, Slide, CodePane } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading color="offwhite">Styled Component Themed</Heading>
        <CodePane
          language="jsx"
          highlightRanges={[
            [1, 1],
            [3, 3],
            [6, 6],
            [3, 7],
          ]}
        >
          {`import styled from "styled-components";

export const ComponentWrapperStyled = styled.div\`
  width: 100px;
  height: 100px;
  background: ${"$({ theme }) => theme.colors.main"};
\`;
`}
        </CodePane>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
