const CaseType : string[] = [
  "CRIMINAL",
  "CIVIL",
  "FAMILY",
  "JUVENILE",
  "ROAD ACCIDENT FUND",
  "LABOUR"
]

const CaseOutcomes : string[] = [
  "OPEN",
  "CLOSED",
  "APPEALED",
  "IN PROGRESS",
  "WITHDRAWN",
  "SETTLED"
]

export function GetCaseTypes(): string[] {
  return CaseType;
}

export function GetCaseOutcomes(): string[] {
  return CaseOutcomes;
}
