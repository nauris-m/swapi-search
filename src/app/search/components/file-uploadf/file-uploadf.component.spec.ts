import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadfComponent } from './file-uploadf.component';

describe('FileUploadfComponent', () => {
  let component: FileUploadfComponent;
  let fixture: ComponentFixture<FileUploadfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
