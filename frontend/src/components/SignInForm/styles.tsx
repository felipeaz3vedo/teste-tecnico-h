import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const InputContainer = styled.div``;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes['s']};
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 16px;
  margin-bottom: 4px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
  font-size: ${({ theme }) => theme.fontSizes['s']};

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSizes['s']};
  }
`;

export const FieldError = styled.span`
  color: ${({ theme }) => theme.colors['red-800']};
  font-size: ${({ theme }) => theme.fontSizes['s']};
`;

export const SubmitButton = styled.button`
  height: 44px;
  margin-top: 40px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['purple-700']};

  color: #fff;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-600']};
  }
`;
