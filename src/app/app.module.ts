import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
