-- CreateTable
CREATE TABLE "StressJob" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "result" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StressJob_pkey" PRIMARY KEY ("id")
);
