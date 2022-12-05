import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-file-uploadf',
  templateUrl: './file-uploadf.component.html',
  styleUrls: ['./file-uploadf.component.less']
})
export class FileUploadfComponent {
  @ViewChild('input') input: ElementRef;

  @Input() url: String;

  @Output() onError = new EventEmitter()
  @Output() onSuccess = new EventEmitter()
  @Output() onUpload = new EventEmitter()

  constructor(private fileService: SearchService) { }

  @HostListener('change')
  onInputChange(): void {
    const input = this.input.nativeElement as HTMLInputElement;

    if(input.files && input.files.length === 0) {
      return;
    }

    alert(this.url);
    if (input.files) {
      alert(input.files[0]);
    }
  }
}
