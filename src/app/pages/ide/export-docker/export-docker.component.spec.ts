import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDockerComponent } from './export-docker.component';

describe('ExportDockerComponent', () => {
  let component: ExportDockerComponent;
  let fixture: ComponentFixture<ExportDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
