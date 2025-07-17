import { GetCaseOutcomes, GetCaseTypes } from './constants';

describe('constants', () => {
  it('should get case outcomes constants', () => {
    expect(GetCaseOutcomes()).toEqual(["OPEN",
      "CLOSED",
      "APPEALED",
      "IN PROGRESS",
      "WITHDRAWN",
      "SETTLED"]);
  });
  
  it('should get case types constants', () => {
    expect(GetCaseTypes()).toEqual(["CRIMINAL",
      "CIVIL",
      "FAMILY",
      "JUVENILE",
      "ROAD ACCIDENT FUND",
      "LABOUR"]);
  });
});
