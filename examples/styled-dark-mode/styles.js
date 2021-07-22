import styled from "styled-components";

export const ComponentWrapperStyled = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ theme }) => theme.colors.main};
`;
