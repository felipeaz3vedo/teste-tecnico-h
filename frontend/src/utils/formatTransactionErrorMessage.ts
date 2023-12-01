export const formatTransactionErrorMessage = (erroMessage?: string) => {
  let formatErrorMessage = 'Algo inesperado aconteceu';

  if (!erroMessage) {
    return formatErrorMessage;
  }

  if (erroMessage === 'Validation failed (expected type is text/plain)') {
    formatErrorMessage =
      'Somente arquivos no formato txt são permitidos para esta ação';

    return formatErrorMessage;
  }

  if (erroMessage === 'ERR_BAD_REQUEST') {
    formatErrorMessage =
      'Arquivo txt inválido, cheque se os valores estão no padrão do arquivo fornecido';

    return formatErrorMessage;
  }

  return formatErrorMessage;
};
