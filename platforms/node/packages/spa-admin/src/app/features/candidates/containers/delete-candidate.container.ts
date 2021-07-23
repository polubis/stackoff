import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CandidatesService } from "../services";

export interface InjectedData {
  id: string;
}

@Component({
  selector: "app-delete-candidate-container",
  template: `
    <app-confirm-delete-component
      [pending]="pending"
      [title]="'Are you sure you want to reject candidate ?'"
      [description]="'This operation cannot be revereted'"
      (cancel)="closeDialog()"
      (confirm)="handleConfirm()"
    >
    </app-confirm-delete-component>
  `,
})
export class DeleteCandidateContainer {
  private _subs = new Subscription();

  pending = false;

  constructor(
    private _candidateService: CandidatesService,
    private _dialogRef: MatDialogRef<DeleteCandidateContainer>,
    @Inject(MAT_DIALOG_DATA) private _data: InjectedData
  ) {}

  closeDialog = (): void => {
    this._dialogRef.close(this._data.id);
  };

  handleConfirm = (): void => {
    this.pending = true;

    this._subs.add(
      this._candidateService
        .rejectOne(this._data.id)
        .subscribe(this.closeDialog, () => {
          this.pending = false;
        })
    );
  };
}
