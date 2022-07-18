/*
  Warnings:

  - You are about to drop the column `branches` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "branchmanageridId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "branches";

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_branchmanageridId_fkey" FOREIGN KEY ("branchmanageridId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
