import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin: 24px 80px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 300px;
  height: 40px;
  padding-inline: 16px;

  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-radius: 4px;

  & svg {
    stroke: #636363;
  }

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors['gray-900']};
  }
`;

export const SearchInput = styled.input`
  flex: 1px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 500;

  &::placeholder {
    color: #636363;
    font-weight: 500;
  }
`;

export const FileInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: 40px;
  padding: 16px;
  border: 1px dashed #bfbfbf;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['s']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors['gray-800']};

  cursor: pointer;

  transition: all 0.2s ease;

  & svg {
    stroke: ${({ theme }) => theme.colors['gray-800']};

    cursor: pointer;

    transition: stroke 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors['purple-600']};
    border-color: ${({ theme }) => theme.colors['purple-500']};

    & svg {
      stroke: ${({ theme }) => theme.colors['purple-600']};
    }
  }
`;

export const UploadTransactionsInput = styled.input`
  position: absolute;
  top: -50;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  cursor: pointer;
`;
