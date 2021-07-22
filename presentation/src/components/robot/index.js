import React from "react";

import {
  RobotStyled,
  EyesWrapperStyled,
  ScreenStyled,
  EyeStyled,
} from "./styles";

const Robot = ({ size }) => {
  return (
    <RobotStyled size={size} className="blink">
      <EyesWrapperStyled>
        <ScreenStyled>
          <EyeStyled className="left " />
          <EyeStyled className="right " />
        </ScreenStyled>
      </EyesWrapperStyled>
    </RobotStyled>
  );
};

export default Robot;
