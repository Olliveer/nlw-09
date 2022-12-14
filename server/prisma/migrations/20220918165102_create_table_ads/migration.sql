-- CreateTable
CREATE TABLE "Ad" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "yearsPlaying" INTEGER NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "userVoiceChannel" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ad" ADD CONSTRAINT "Ad_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
