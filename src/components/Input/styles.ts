import styled from "styled-components";

interface ContainerProps {
  hasBorder?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ hasBorder, theme }) => (hasBorder ? theme.colors.dark[700] : theme.colors.dark[900])};
  color: ${({ theme }) => theme.colors.tomato};
  
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    height: 56px;
    width: 100%;
    padding: 12px 14px;
    
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.tomato};
    background: transparent;
    border: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.white[100]}` : '0')};
    &::placeholder {
      color: ${({ theme }) => theme.colors.white[500]};
      font-family: ${({ theme }) =>theme.fonts.roboto};
    }
  }
  
  > svg {
    margin-left: 16px;
  }
`;