/*
  Warnings:

  - You are about to drop the column `cvId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `cvId` on the `Employment` table. All the data in the column will be lost.
  - You are about to drop the `CV` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resumeId` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumeId` to the `Employment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CV" DROP CONSTRAINT "CV_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_cvId_fkey";

-- DropForeignKey
ALTER TABLE "Employment" DROP CONSTRAINT "Employment_cvId_fkey";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "cvId",
ADD COLUMN     "resumeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employment" DROP COLUMN "cvId",
ADD COLUMN     "resumeId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CV";

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employment" ADD CONSTRAINT "Employment_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
