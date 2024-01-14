import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPhoneComponent } from './card-phone.component';

describe('CardPhoneComponent', () => {
  let component: CardPhoneComponent;
  let fixture: ComponentFixture<CardPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
