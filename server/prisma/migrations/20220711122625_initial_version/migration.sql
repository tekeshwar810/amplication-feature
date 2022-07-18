/*
  Warnings:

  - You are about to drop the column `manageridId` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `useridId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_manageridId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_useridId_fkey";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "manageridId",
ADD COLUMN     "branchmanagerid" INTEGER;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "useridId";
