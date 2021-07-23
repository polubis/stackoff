import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-candidate-form-component",
  styleUrls: ["./candidate-form.component.scss"],
  templateUrl: "./candidate-form.component.html",
})
export class CandidateFormComponent {
  @Input() pending: boolean;
  @Input() form: FormGroup;
  @Output() submit = new EventEmitter<void>();
}
