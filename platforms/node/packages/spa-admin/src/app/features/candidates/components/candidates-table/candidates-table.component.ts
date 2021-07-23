import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Candidates } from "../../models";

@Component({
  selector: "app-candidates-table-component",
  styleUrls: ["./candidates-table.component.scss"],
  templateUrl: "./candidates-table.component.html",
})
export class CandidatesTableComponent {
  @Input() candidates: Candidates;

  @Output() acceptClicked = new EventEmitter<string>();
  @Output() addClicked = new EventEmitter<void>();
  @Output() rejectClicked = new EventEmitter<string>();

  displayedColumns = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "position",
    "wage",
    "startRecruitmentDate",
    "endRecruitmentDate",
    "cvUrl",
    "recommendationUrl",
    "accept",
    "edit",
    "reject",
  ];
}
