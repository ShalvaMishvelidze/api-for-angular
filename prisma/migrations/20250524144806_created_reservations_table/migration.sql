-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "guestName" TEXT NOT NULL,
    "guestEmail" TEXT NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "checkInDate" DATETIME NOT NULL,
    "checkOutDate" DATETIME NOT NULL
);
