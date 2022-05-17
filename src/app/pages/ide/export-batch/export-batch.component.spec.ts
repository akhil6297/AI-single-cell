import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBatchComponent } from './export-batch.component';

describe('ExportBatchComponent', () => {
  let component: ExportBatchComponent;
  let fixture: ComponentFixture<ExportBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
