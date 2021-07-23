import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfirmDeleteComponent } from "./confirm-delete";
import { MatModule } from "shared/material";

@NgModule({
  imports: [CommonModule, MatModule],
  declarations: [ConfirmDeleteComponent],
  exports: [ConfirmDeleteComponent],
})
export class ComponentsModule {}
