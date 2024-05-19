import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) =>theme.colors.dark[700]};

  width: 478px;
  padding: 64px;

  > h2 {
    font-family: ${({ theme }) =>theme.fonts.poppins};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white[100]};
  }

  > a {
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.white[100]};
    font-family: ${({ theme }) =>theme.fonts.roboto};
  }

  > label {
    font-size: 16px;
    margin-top: 32px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.white[400]};
    text-align: left; 
    font-family: ${({ theme }) =>theme.fonts.poppins};
  }
  
  > button {
    margin-top: 32px;
  }
`;
