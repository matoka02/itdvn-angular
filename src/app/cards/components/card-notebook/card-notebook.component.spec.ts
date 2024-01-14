import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotebookComponent } from './card-notebook.component';

describe('CardNotebookComponent', () => {
  let component: CardNotebookComponent;
  let fixture: ComponentFixture<CardNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNotebookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
