import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray-75']};
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 40px 54px 40px;
  background-color: #fff;
  border-radius: 4px;

  svg {
    position: absolute;
    top: 24px;
    right: 40px;
    width: 24px;
    stroke: ${({ theme }) => theme.colors['gray-600']};

    cursor: pointer;

    &:hover {
      stroke: ${({ theme }) => theme.colors['purple-600']};
    }
  }
`;

export const FormTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  margin-bottom: 32px;
`;

export const SigninMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['s']};
  color: ${({ theme }) => theme.colors['gray-700']};

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors['purple-700']};

    cursor: pointer;
  }
`;
