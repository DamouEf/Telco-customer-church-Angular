import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictComponentComponent } from './predict-component.component';

describe('PredictComponentComponent', () => {
  let component: PredictComponentComponent;
  let fixture: ComponentFixture<PredictComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
