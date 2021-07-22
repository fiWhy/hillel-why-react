import React from "react";
import { FlexBox, Slide, OrderedList, Appear, ListItem } from "spectacle";

const SlideElement = () => {
  return (
    <Slide>
      <FlexBox height="100%">
        <OrderedList>
          <Appear>
            <ListItem>Писать современный код</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Выстраивать архитектуру проекта (думать архитектурой)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>Выстраивать компонентную структуру для проекта</ListItem>
          </Appear>
          <Appear>
            <ListItem>Выстраивать стили для проекта</ListItem>
          </Appear>
          <Appear>
            <ListItem>Отрезать ненужное и вовремя останавливаться</ListItem>
          </Appear>
        </OrderedList>
      </FlexBox>
    </Slide>
  );
};

export default SlideElement;
