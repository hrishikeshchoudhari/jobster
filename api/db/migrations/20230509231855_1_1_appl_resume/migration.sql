/*
  Warnings:

  - A unique constraint covering the columns `[applicantId]` on the table `Resume` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Resume_applicantId_key" ON "Resume"("applicantId");
