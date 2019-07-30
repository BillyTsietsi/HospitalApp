import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientstabComponent } from './patientstab.component';

describe('PatientstabComponent', () => {
  let component: PatientstabComponent;
  let fixture: ComponentFixture<PatientstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
