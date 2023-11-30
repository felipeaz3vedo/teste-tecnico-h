-- CreateTable
CREATE TABLE "transaction_types" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "nature" TEXT NOT NULL,
    "signal" TEXT NOT NULL,

    CONSTRAINT "transaction_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "transaction_type_id" INTEGER NOT NULL,
    "date" TIMESTAMP(0) NOT NULL,
    "product" TEXT NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "seller" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transaction_types_description_key" ON "transaction_types"("description");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transaction_type_id_fkey" FOREIGN KEY ("transaction_type_id") REFERENCES "transaction_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
