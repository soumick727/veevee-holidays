import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBus } from './add-bus';

describe('AddBus', () => {
  let component: AddBus;
  let fixture: ComponentFixture<AddBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBus],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
