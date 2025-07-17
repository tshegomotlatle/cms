/*
  Warnings:

  - You are about to drop the `_LawyerToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `lawyers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_LawyerToUser" DROP CONSTRAINT "_LawyerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_LawyerToUser" DROP CONSTRAINT "_LawyerToUser_B_fkey";

-- AlterTable
ALTER TABLE "lawyers" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_LawyerToUser";

-- AddForeignKey
ALTER TABLE "lawyers" ADD CONSTRAINT "lawyers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
