/*
  Warnings:

  - You are about to drop the column `userIdId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `branchId` on the `User` table. All the data in the column will be lost.
  - Added the required column `useridId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_userIdId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_branchId_fkey";

-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "manageridId" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "userIdId",
ADD COLUMN     "useridId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "branchId";

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_manageridId_fkey" FOREIGN KEY ("manageridId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_useridId_fkey" FOREIGN KEY ("useridId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
