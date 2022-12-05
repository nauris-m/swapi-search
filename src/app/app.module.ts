import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FileUploadfComponent } from './search/components/file-uploadf/file-uploadf.component';
import { AttachmentsComponent } from './search/components/attachments/attachments.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    FileUploadfComponent,
    AttachmentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
