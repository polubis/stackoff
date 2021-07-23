export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  position: string;
  wage: number;
  startRecruitmentDate: string;
  endRecruitmentDate: string;
  cvUrl: string;
  recommendationUrl: string;
}

export type Candidates = Candidate[];

export interface AddCandidatePayload
  extends Omit<
    Candidate,
    "id" | "startRecruitmentDate" | "endRecruitmentDate"
  > {}

export interface EditCandidatePayload extends Omit<Candidate, "id"> {}
