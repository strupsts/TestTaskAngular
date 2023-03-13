import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from "@angular/material/dialog";

import { AppComponent } from './app.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import { FilterFilmsPipe } from './pipes/filter-films.pipe';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    CardDialogComponent,
    FilterFilmsPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
