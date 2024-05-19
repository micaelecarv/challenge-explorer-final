import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tomato[100]};;
  color: ${({ theme }) => theme.colors.white[100]};

  height: 48px;
  border: 0;
  padding: 12px 32px;
  border-radius: 5px;
  font-weight: 500;
  font-family: ${({ theme }) =>theme.fonts.roboto};

  &:disabled {
    opacity: 0.5;
  }
`;