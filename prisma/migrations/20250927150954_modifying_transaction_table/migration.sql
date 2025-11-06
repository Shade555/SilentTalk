/*
  Warnings:

  - You are about to drop the column `created_at` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to alter the column `amount` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[stripeSession]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currency` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripeSession` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."transactions" DROP CONSTRAINT "transactions_user_id_fkey";

-- AlterTable
ALTER TABLE "public"."transactions" DROP COLUMN "created_at",
DROP COLUMN "method",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "plan" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "stripeSession" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE INTEGER,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transactions_stripeSession_key" ON "public"."transactions"("stripeSession");

-- CreateIndex
CREATE INDEX "transactions_userId_idx" ON "public"."transactions"("userId");

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
