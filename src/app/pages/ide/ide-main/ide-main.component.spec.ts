import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeMainComponent } from './ide-main.component';

describe('IdeMainComponent', () => {
  let component: IdeMainComponent;
  let fixture: ComponentFixture<IdeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
