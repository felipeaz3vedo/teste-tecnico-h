import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const data = [
    {
      id: 1,
      description: 'producer sale',
      nature: 'income',
      signal: '+'
    },
    {
      id: 2,
      description: 'affiliate sale',
      nature: 'income',
      signal: '+'
    },
    {
      id: 3,
      description: 'commission paid',
      nature: 'expense',
      signal: '-'
    },
    {
      id: 4,
      description: 'commission received',
      nature: 'income',
      signal: '+'
    }
  ];

  await prisma.transactionType.createMany({ data });
};

main()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
