import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { MatCardModule} from '@angular/material';
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
      MaterialModule,
      MatGridListModule,
      MatCardModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }