import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { ProjectsComponent } from "./projects/projects.component";
import { AboutComponent } from "./about/about.component";
import { LinksComponent } from "./links/links.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
