/*
  Warnings:

  - You are about to drop the `Prhases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Prhases";

-- CreateTable
CREATE TABLE "Phrases" (
    "id" SERIAL NOT NULL,
    "phrase" TEXT NOT NULL,
    "context" TEXT,
    "author" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Phrases_pkey" PRIMARY KEY ("id")
);
