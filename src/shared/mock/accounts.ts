import { Account } from "@/shared/types/financial";

export const accounts: Account[] = [
  {
    type: "some type",
    id: "some account id 1",
    prefixMask: "3778",
    postfixMask: "1234",
    name: "some account name",
    ownerName: "Nick Miriad",
    currentBalance: 9123.45,
    availableBalance: 100,
    subtype: "some subtype",
    institutionId: "some institutionId",
    officialName: "some officialName",
    validityDate: "2026-02-11T14:30:00Z",
  },
  {
    type: "some type",
    id: "some account id 2",
    prefixMask: "5345",
    postfixMask: "0977",
    name: "some account name",
    ownerName: "Nick Miriad",
    currentBalance: 56923.45,
    availableBalance: 100,
    subtype: "some subtype",
    institutionId: "some institutionId",
    officialName: "some officialName",
    validityDate: "2027-12-11T14:30:00Z",
  },
];
