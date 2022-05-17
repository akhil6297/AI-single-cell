import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataByTasksComponent } from './data-by-tasks.component';

describe('DataByTasksComponent', () => {
  let component: DataByTasksComponent;
  let fixture: ComponentFixture<DataByTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataByTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataByTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
