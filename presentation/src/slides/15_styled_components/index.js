import React from "react";
import { FlexBox, Heading, Slide } from "spectacle";
import Robot from "../../components/robot";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%">
        <Heading color="offwhite">Styled Components</Heading>
        <Robot size={100} />
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
