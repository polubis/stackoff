import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "candidates",
    loadChildren: () =>
      import("./features/candidates/candidates.module").then(
        (m) => m.CandidatesModule
      ),
  },
  { path: "**", pathMatch: "full", redirectTo: "/candidates" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
