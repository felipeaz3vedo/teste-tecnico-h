import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  width: 100%;
  min-height: 4.5rem;
  padding: 32px 80px;
`;

export const PageTitle = styled.h1`
  color: ${({ theme }) => theme.colors['gray-800']};
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  text-transform: uppercase;
`;

export const LogOutButton = styled.button`
  background-color: ${({ theme }) => theme.colors['purple-700']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;

  cursor: pointer;

  & svg {
    stroke: #fff;

    transition: stroke 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple-600']};
  }
`;
