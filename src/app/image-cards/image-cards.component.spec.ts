import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardsComponent } from './image-cards.component';

describe('ImageCardsComponent', () => {
  let component: ImageCardsComponent;
  let fixture: ComponentFixture<ImageCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCardsComponent]
    });
    fixture = TestBed.createComponent(ImageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
