export const toLocaleDate = (datetime: Date) => {
  const dateToLocale = new Date(datetime).toLocaleString('pt-BR', {
    timeZone: 'America/Recife'
  });

  const formatedDate = dateToLocale.slice(0, 10);
  const formatedTime = dateToLocale.slice(12, 17);

  const formatedDateTime = `${formatedDate} às ${formatedTime}`;

  return formatedDateTime;
};
