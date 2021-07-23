import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CandidatesContainer, CandidatesAcceptContainer } from "./containers";

const routes: Routes = [
  {
    path: "",
    component: CandidatesContainer,
  },
  { path: "accept/:id", component: CandidatesAcceptContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule {}
