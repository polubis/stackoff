import { Candidate } from "../models";

const createCandidate = (): Candidate => ({
  id: "dasdsaddad",
  firstName: "Piotr",
  lastName: "Jaroslaw",
  phoneNumber: "223 332 332",
  email: "jaro@wp.pl",
  position: "Frontend developer",
  wage: 87,
  startRecruitmentDate: "19-12-1994",
  endRecruitmentDate: "19-12-1994",
  cvUrl: "httpL///",
  recommendationUrl: "http",
});

export const candidateBuilder = (candidate = createCandidate()) => ({
  setId: (id: string) => candidateBuilder({ ...candidate, id }),
  valueOf: () => candidate,
});
