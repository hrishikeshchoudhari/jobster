/*
  Warnings:

  - You are about to drop the column `employmentId` on the `Skill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_employmentId_fkey";

-- AlterTable
ALTER TABLE "Employment" ADD COLUMN     "skills" TEXT[];

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "employmentId";
