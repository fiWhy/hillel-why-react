import styled, { css, keyframes } from "styled-components";

const blink = keyframes`
  0% {
    transform: translateY(-50%) scale(1);
  }
  10% {
    transform: translateY(-50%) scale(1, 0);
  }
  20% {
   transform: translateY(-50%) scale(1, 1.1);
  }
  21% {
    transform: translateY(-50%) scale(1);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
`;

const bordered = css`
  border-top-left-radius: 30% 50%;
  border-bottom-left-radius: 30% 50%;
  border-top-right-radius: 30% 50%;
  border-bottom-right-radius: 30% 50%;
`;

const centered = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const centeredY = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const EyeStyled = styled.div`
  ${centeredY}
  border-radius: 50%;
  background: rgba(52, 122, 235, 1);
  width: 15px;
  height: 25px;
  &.left {
    left: 15px;
  }

  &.right {
    right: 15px;
  }
`;

export const ScreenStyled = styled.div`
  ${centered}
  ${bordered}
  background: rgba(16, 17, 18, 1);
`;

export const EyesWrapperStyled = styled.div`
  ${centered}
  ${bordered}
  background: rgba(52, 122, 235, 1);
  box-shadow: -10px -10px 12px 0px rgba(34, 60, 80, 0.2) inset;
`;

export const RobotStyled = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  border: 1px solid rgba(34, 60, 80, 0.2);
  background: #fff;
  box-shadow: -10px -10px 12px 0px rgba(34, 60, 80, 0.2) inset;
  ${EyesWrapperStyled} {
    width: ${({ size }) => size * 0.9}px;
    height: ${({ size }) => size * 0.65}px;
    ${ScreenStyled} {
      width: ${({ size }) => size * 0.9 - 10}px;
      height: ${({ size }) => size * 0.65 - 20}px;
    }
  }
  &.blink {
    ${EyeStyled} {
      animation: 5s ${blink} infinite;
    }
  }
`;
