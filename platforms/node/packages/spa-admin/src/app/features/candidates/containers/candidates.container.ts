import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, EMPTY, Subscription } from "rxjs";
import { catchError, switchMap, tap } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

import { Idle } from "shared/framework";
import { CANDIDATES_ACCEPT_ROUTE } from "../candidates.router";

import { Candidate, Candidates } from "../models";
import { CandidatesService } from "../services";
import { AddCandidatesContainer } from "./add-candidate.container";
import {
  DeleteCandidateContainer,
  InjectedData,
} from "./delete-candidate.container";

@Component({
  selector: "app-candidates-container",
  template: `
    <ng-container *ngIf="loadCandidates$ | async"></ng-container>

    <ng-container *ngIf="candidates.idle">Loading candidates...</ng-container>

    <app-candidates-table-component
      *ngIf="candidates.ok"
      [candidates]="candidates.data"
      (acceptClicked)="handleAcceptClick($event)"
      (addClicked)="handleAddClick()"
      (rejectClicked)="handleRejectClick($event)"
    >
    </app-candidates-table-component>

    <ng-container *ngIf="candidates.error">
      Error occured !
      <button (click)="handleReloadClick()">Reload candidates</button>
    </ng-container>
  `,
})
export class CandidatesContainer implements OnDestroy {
  private _subs = new Subscription();

  candidates = Idle<Candidates>([]);

  private _loadCandidates = new BehaviorSubject<object>({});
  loadCandidates$ = this._loadCandidates.asObservable().pipe(
    tap(() => {
      this.candidates = this.candidates.Idle([]);
    }),
    switchMap(() =>
      this._candidatesService.getMany().pipe(
        tap((candidates) => {
          this.candidates = this.candidates.Ok(candidates);
        }),
        catchError(() => {
          this.candidates = this.candidates.Error([]);
          return EMPTY;
        })
      )
    )
  );

  constructor(
    private _candidatesService: CandidatesService,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  handleReloadClick = (): void => {
    this._loadCandidates.next({});
  };

  handleAcceptClick = (id: string): void => {
    this._router.navigateByUrl(CANDIDATES_ACCEPT_ROUTE(id));
  };

  handleAddClick = (): void => {
    const dialogRef = this._dialog.open(AddCandidatesContainer, {
      width: "250px",
      data: {},
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((candidate?: Candidate) => {
        if (candidate) {
          this.candidates = {
            ...this.candidates,
            data: [...this.candidates.data, candidate],
          };
        }
      })
    );
  };

  handleRejectClick = (id: string): void => {
    const dialogRef = this._dialog.open(DeleteCandidateContainer, {
      width: "250px",
      data: {
        id,
      } as InjectedData,
    });

    this._subs.add(
      dialogRef.afterClosed().subscribe((id?: string) => {
        if (id !== undefined) {
          this.candidates = {
            ...this.candidates,
            data: this.candidates.data.filter((c) => c.id !== id),
          };
        }
      })
    );
  };
}
