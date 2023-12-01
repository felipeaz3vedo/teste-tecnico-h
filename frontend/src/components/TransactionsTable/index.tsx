import { calculateSellersBalance } from '../../utils/calculateSellersBalance';
import { formatMoney } from '../../utils/formatMoney';
import { toLocaleDate } from '../../utils/toLocaleDate';

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

interface TransactionProps {
  transactions: Transaction[];
}

export const TransactionsTable = ({ transactions }: TransactionProps) => {
  const sellersBalance = calculateSellersBalance(transactions);

  return (
    <S.TableContainer>
      <S.Table>
        <thead>
          <tr>
            <th>id</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Nome do produto</th>
            <th>Valor da transação</th>
            <th>Vendedor/Afiliado</th>
            <th>Saldo do Vendedor/Afiliado</th>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.transactionTypeId}</td>
                <td>{toLocaleDate(transaction.date)}</td>
                <td>{transaction.product}</td>
                {transaction.transactionTypeId === 3 ? (
                  <td>
                    <S.IncomeWrapper type="expense">
                      {formatMoney(transaction.value)}
                    </S.IncomeWrapper>
                  </td>
                ) : (
                  <td>
                    <S.IncomeWrapper type="income">
                      {formatMoney(transaction.value)}
                    </S.IncomeWrapper>
                  </td>
                )}
                <td>{transaction.seller}</td>

                {sellersBalance ? (
                  sellersBalance.map((sellersBalance) => {
                    if (sellersBalance.name === transaction.seller) {
                      const isPosiveBalance = sellersBalance.balance >= 0;

                      return (
                        <td>
                          <S.BalanceWrapper isPositiveBalance={isPosiveBalance}>
                            {formatMoney(sellersBalance.balance)}
                          </S.BalanceWrapper>
                        </td>
                      );
                    }
                  })
                ) : (
                  <td />
                )}
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};
