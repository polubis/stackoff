import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CandidatesService } from "../services";
import { createAddFormConfig } from "../utils";

@Component({
  selector: "app-add-candidates-container",
  template: `
    <app-candidate-form-component
      [form]="form"
      [pending]="pending"
      (submit)="handleSubmit()"
    >
    </app-candidate-form-component>
  `,
})
export class AddCandidatesContainer {
  private _subs = new Subscription();

  pending = false;
  form = createAddFormConfig();

  constructor(
    private _candidateService: CandidatesService,
    private _dialogRef: MatDialogRef<AddCandidatesContainer>
  ) {}

  handleSubmit = (): void => {
    this.pending = true;

    this._subs.add(
      this._candidateService.addOne(this.form.value).subscribe(
        () => {
          this._dialogRef.close(this.form.value);
        },
        () => {
          this.pending = false;
        }
      )
    );
  };
}
