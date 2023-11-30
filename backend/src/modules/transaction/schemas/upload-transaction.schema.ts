import z from 'zod';

const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}-\d{2}:\d{2}$/;

export const uploadTransactionSchema = z.object({
  transactionTypeId: z.string().refine(
    (value) => {
      return /^[1-4]$/.test(value); // verify if value have a numeric character between 1 and 4
    },
    {
      message:
        'Invalid txt format. TrtransactionType must contain exactly one numerci character between 1 and 4'
    }
  ),
  date: z.string().refine((dateTime) => dateFormat.test(dateTime), {
    message:
      'Invalid txt format. Date is not in the correct format (e.g 2022-01-15T19:20:30-03:00)'
  }),
  product: z.string(),
  value: z
    .string()
    .length(10, {
      message: 'Invalid txt format. Value must be exactly 10 characters long'
    })
    .refine(
      (value) => {
        const characters = parseInt(value, 10);
        return !isNaN(characters);
      },
      {
        message: 'Invalid txt format. Value must have only numeric characters'
      }
    ),
  seller: z.string()
});
