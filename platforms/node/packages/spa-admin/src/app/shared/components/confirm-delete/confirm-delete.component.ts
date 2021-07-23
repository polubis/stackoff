import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-confirm-delete-component",
  styleUrls: ["./confirm-delete.component.scss"],
  templateUrl: "./confirm-delete.component.html",
})
export class ConfirmDeleteComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() pending: boolean;

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
}
