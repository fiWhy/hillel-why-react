import React from "react";
import {
  FlexBox,
  Appear,
  ListItem,
  OrderedList,
  Heading,
  Slide,
} from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>React Cons</Heading>
        <OrderedList>
          <Appear>
            <ListItem>Полная свобода действий</ListItem>
          </Appear>
        </OrderedList>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
