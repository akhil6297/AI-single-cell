import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStepsComponent } from './load-steps.component';

describe('LoadStepsComponent', () => {
  let component: LoadStepsComponent;
  let fixture: ComponentFixture<LoadStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
