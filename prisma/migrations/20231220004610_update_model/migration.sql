-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_imporvements" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_imporvements" ("email", "id", "message", "name", "subject") SELECT "email", "id", "message", "name", "subject" FROM "imporvements";
DROP TABLE "imporvements";
ALTER TABLE "new_imporvements" RENAME TO "imporvements";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
