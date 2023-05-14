/*
  Warnings:

  - You are about to drop the column `userId` on the `CV` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CV" DROP CONSTRAINT "CV_userId_fkey";

-- AlterTable
ALTER TABLE "CV" DROP COLUMN "userId";
