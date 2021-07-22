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
        <Heading>Angular Cons</Heading>
        <OrderedList>
          <Appear>
            <ListItem>
              Строгие правила создания и архитектурного структурирования
              продукта
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Большое кол-во дополнительной информации, требуемой для написания
              кода
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Typescript (?)</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Как следствие - большее кол-во времени для создания простых
              решений
            </ListItem>
          </Appear>
        </OrderedList>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
