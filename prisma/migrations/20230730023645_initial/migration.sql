-- CreateTable
CREATE TABLE "Prhases" (
    "id" SERIAL NOT NULL,
    "phrase" TEXT NOT NULL,
    "context" TEXT,
    "author" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Prhases_pkey" PRIMARY KEY ("id")
);
