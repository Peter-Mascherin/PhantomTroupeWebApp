import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDialogComponentComponent } from './gallery-dialog-component.component';

describe('GalleryDialogComponentComponent', () => {
  let component: GalleryDialogComponentComponent;
  let fixture: ComponentFixture<GalleryDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryDialogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
