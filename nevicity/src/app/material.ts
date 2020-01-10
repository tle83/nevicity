import {
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
