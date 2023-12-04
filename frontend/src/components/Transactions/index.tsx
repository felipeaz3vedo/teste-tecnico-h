import { ChangeEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { FileUp as FileUpIcon, Search as SearchIcon } from 'lucide-react';

import { getTransactions, uploadTransactions } from '../../libs/axios';
import { TransactionsTable } from '../TransactionsTable';
import { formatTransactionErrorMessage } from '../../utils/formatTransactionErrorMessage';

import * as S from './styles';

interface Transaction {
  id: string;
  transactionTypeId: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
  createdAt: string;
}

export const Transactions = () => {
  const [seller, setSeller] = useState('');

  const queryClient = useQueryClient();

  const { data: transactions, isSuccess } = useQuery<Transaction[]>({
    queryKey: ['transactions', seller],
    queryFn: () => getTransactions(seller)
  });

  const { isPending, mutateAsync: uploadTransactionMutation } = useMutation({
    mutationFn: uploadTransactions,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions']
      });

      toast.success('Transações adicionadas com sucesso');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage = formatTransactionErrorMessage(
          error.response?.data.message
        );

        toast.error(errorMessage);
      }
    }
  });

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append('file', file);

      await uploadTransactionMutation(formData);

      event.target.value = '';

      return;
    }

    event.target.value = '';

    toast.warning(
      'Aconteceu um erro inesperado, contate o administrador do sistema'
    );
  };

  return (
    <S.Container>
      <S.ActionsContainer>
        <S.SearchContainer>
          <SearchIcon />
          <S.SearchInput
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            type="search"
            placeholder="Buscar por vendedor"
          />
        </S.SearchContainer>

        <S.FileInputContainer>
          <S.UploadTransactionsInput
            disabled={isPending}
            type="file"
            value=""
            onChange={(event) => handleUpload(event)}
          />
          <FileUpIcon />
          Upload de Transações
        </S.FileInputContainer>
      </S.ActionsContainer>

      {isSuccess && <TransactionsTable transactions={transactions} />}
    </S.Container>
  );
};
