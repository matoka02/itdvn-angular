import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTVComponent } from './card-tv.component';

describe('CardTvComponent', () => {
  let component: CardTVComponent;
  let fixture: ComponentFixture<CardTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
