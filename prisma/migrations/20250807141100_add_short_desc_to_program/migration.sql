/*
  Warnings:

  - Added the required column `shortDesc` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Program" ADD COLUMN     "shortDesc" TEXT NOT NULL;
