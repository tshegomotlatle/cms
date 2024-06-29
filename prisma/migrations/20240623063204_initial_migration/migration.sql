-- CreateTable
CREATE TABLE "court_cases" (
    "id" TEXT NOT NULL,
    "caseNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "plaintiff" TEXT NOT NULL,
    "defendant" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT,
    "outcome" TEXT,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "court_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lawyers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,

    CONSTRAINT "lawyers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "passwordSalt" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_items" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "hours" INTEGER NOT NULL,
    "costPerHour" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,

    CONSTRAINT "invoice_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "court_case_dates" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,

    CONSTRAINT "court_case_dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourtCaseToLawyer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LawyerToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourtCaseDateToLawyer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "court_cases_caseNumber_key" ON "court_cases"("caseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_email_key" ON "lawyers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lawyers_mobileNumber_key" ON "lawyers"("mobileNumber");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "documents_path_key" ON "documents"("path");

-- CreateIndex
CREATE UNIQUE INDEX "_CourtCaseToLawyer_AB_unique" ON "_CourtCaseToLawyer"("A", "B");

-- CreateIndex
CREATE INDEX "_CourtCaseToLawyer_B_index" ON "_CourtCaseToLawyer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LawyerToUser_AB_unique" ON "_LawyerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LawyerToUser_B_index" ON "_LawyerToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourtCaseDateToLawyer_AB_unique" ON "_CourtCaseDateToLawyer"("A", "B");

-- CreateIndex
CREATE INDEX "_CourtCaseDateToLawyer_B_index" ON "_CourtCaseDateToLawyer"("B");

-- AddForeignKey
ALTER TABLE "court_cases" ADD CONSTRAINT "court_cases_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "court_cases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_items" ADD CONSTRAINT "invoice_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_items" ADD CONSTRAINT "invoice_items_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "court_cases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "court_case_dates" ADD CONSTRAINT "court_case_dates_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "court_cases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourtCaseToLawyer" ADD CONSTRAINT "_CourtCaseToLawyer_A_fkey" FOREIGN KEY ("A") REFERENCES "court_cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourtCaseToLawyer" ADD CONSTRAINT "_CourtCaseToLawyer_B_fkey" FOREIGN KEY ("B") REFERENCES "lawyers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LawyerToUser" ADD CONSTRAINT "_LawyerToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "lawyers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LawyerToUser" ADD CONSTRAINT "_LawyerToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourtCaseDateToLawyer" ADD CONSTRAINT "_CourtCaseDateToLawyer_A_fkey" FOREIGN KEY ("A") REFERENCES "court_case_dates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourtCaseDateToLawyer" ADD CONSTRAINT "_CourtCaseDateToLawyer_B_fkey" FOREIGN KEY ("B") REFERENCES "lawyers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
