import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  width: 100%;

  border-radius: 24px;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 700px;
  overflow: auto;

  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-collapse: collapse;

  td,
  th {
    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-200']};

    font-size: ${({ theme }) => theme.fontSizes['xs']};
    text-align: center;
  }

  th {
    border-top: 1px solid ${({ theme }) => theme.colors['gray-200']};
    padding: 16px 24px;

    font-weight: 500;
    color: ${({ theme }) => theme.colors['gray-600']};
    text-transform: uppercase;
  }

  td {
    font-weight: 500;
    padding-block: 14px;
    padding: 24px 24px;
  }

  th:first-child,
  td:first-child {
    max-width: 300px;
  }
`;

interface IncomeWrapperProps {
  type: 'income' | 'expense';
}

export const IncomeWrapper = styled.span<IncomeWrapperProps>`
  padding: 4px 8px;
  border-radius: 4px;

  ${({ type }) =>
    type === 'income'
      ? css`
          color: ${({ theme }) => theme.colors['green-800']};
          background-color: ${({ theme }) => theme.colors['green-200']};
        `
      : css`
          color: ${({ theme }) => theme.colors['red-900']};
          background-color: ${({ theme }) => theme.colors['red-300']};
        `};
`;

interface BalanceWrapperProps {
  isPositiveBalance: boolean;
}

export const BalanceWrapper = styled.span<BalanceWrapperProps>`
  padding: 4px 8px;
  border-radius: 4px;

  ${({ isPositiveBalance }) =>
    isPositiveBalance
      ? css`
          color: ${({ theme }) => theme.colors['green-800']};
          background-color: ${({ theme }) => theme.colors['green-200']};
        `
      : css`
          color: ${({ theme }) => theme.colors['red-900']};
          background-color: ${({ theme }) => theme.colors['red-300']};
        `};
`;
