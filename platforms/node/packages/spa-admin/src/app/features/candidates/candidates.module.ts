import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatModule } from "shared/material";

import {
  CandidatesContainer,
  CandidatesAcceptContainer,
  AddCandidatesContainer,
  DeleteCandidateContainer,
} from "./containers";
import { CandidatesRoutingModule } from "./candidates-routing.module";
import { CandidatesTableComponent, CandidateFormComponent } from "./components";
import { ComponentsModule } from "shared/components";

const CONTAINERS = [
  CandidatesContainer,
  CandidatesAcceptContainer,
  AddCandidatesContainer,
  DeleteCandidateContainer,
];
const COMPONENTS = [
  CandidatesTableComponent,
  CandidateFormComponent,
];

@NgModule({
  imports: [
    MatModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CandidatesRoutingModule,
  ],
  declarations: [...CONTAINERS, ...COMPONENTS],
})
export class CandidatesModule {}
