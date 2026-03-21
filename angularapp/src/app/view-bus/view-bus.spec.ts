import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBus } from './view-bus';

describe('ViewBus', () => {
  let component: ViewBus;
  let fixture: ComponentFixture<ViewBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBus],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
