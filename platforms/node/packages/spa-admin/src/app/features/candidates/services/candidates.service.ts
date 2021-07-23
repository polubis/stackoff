import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { candidateBuilder } from "../mocks";
import {
  Candidate,
  Candidates,
  EditCandidatePayload,
  AddCandidatePayload,
} from "../models";

@Injectable({ providedIn: "root" })
export class CandidatesService {
  constructor(private _http: HttpClient) {}

  getOne = (id: string): Observable<Candidate> =>
    of(candidateBuilder().valueOf());
  // this._http.get<Candidate>(this._createUrl(`/${id}`));

  getMany = (): Observable<Candidates> =>
    of([
      candidateBuilder().valueOf(),
      candidateBuilder().setId("1231").valueOf(),
      candidateBuilder().setId("dasd").valueOf(),
      candidateBuilder().setId("sssd").valueOf(),
    ]).pipe(delay(500));
  // this._http.get<Candidates>(this._createUrl());

  rejectOne = (id: string): Observable<null> => of(null).pipe(delay(2000));
  // this._http.delete<unknown>(this._createUrl(`/${id}`));

  addOne = (payload: AddCandidatePayload): Observable<Candidate> =>
    of(candidateBuilder().setId("1231").valueOf()).pipe(delay(2000));
  // this._http.post<Candidate>(this._createUrl(), payload);

  // editOne = (
  //   id: string,
  //   candidate: EditCandidatePayload
  // ): Observable<Candidate> =>
  //   this._http.put<Candidate>(this._createUrl(`/${id}`), candidate);
}
