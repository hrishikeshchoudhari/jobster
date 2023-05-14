/*
  Warnings:

  - You are about to drop the column `yearsOfStudy` on the `Education` table. All the data in the column will be lost.
  - Added the required column `applicantId` to the `CV` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endYear` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startYear` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `level` on the `Education` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('SCHOOL', 'BACHELORS', 'MASTERS', 'PHD');

-- DropForeignKey
ALTER TABLE "CV" DROP CONSTRAINT "CV_userId_fkey";

-- AlterTable
ALTER TABLE "CV" ADD COLUMN     "applicantId" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "yearsOfStudy",
ADD COLUMN     "endYear" INTEGER NOT NULL,
ADD COLUMN     "startYear" INTEGER NOT NULL,
DROP COLUMN "level",
ADD COLUMN     "level" "Level" NOT NULL;

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CV" ADD CONSTRAINT "CV_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
