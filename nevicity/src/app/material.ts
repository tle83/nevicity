import {
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatCardModule, MatChipsModule],
  exports: [MatButtonModule, MatGridListModule, MatCardModule, MatChipsModule]
})
export class MaterialModule {}
