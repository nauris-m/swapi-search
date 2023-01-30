import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.less']
})
export class AttachmentsComponent implements OnInit {

  uploadUrl = 'https://127.0.0.1/9898';

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  logError(): void {
    alert('error');
  }

  logSuccess($event: any): void {
    alert('error' + $event);
  }

  trigger() {
    const uploadButton = this.element.nativeElement.querySelector('#upload-button input') as HTMLElement;
    uploadButton.click();
  }

open() {
window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
}

}
