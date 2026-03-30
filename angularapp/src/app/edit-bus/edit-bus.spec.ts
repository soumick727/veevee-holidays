import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBus } from './edit-bus';

describe('EditBus', () => {
  let component: EditBus;
  let fixture: ComponentFixture<EditBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBus],
    }).compileComponents();

    fixture = TestBed.createComponent(EditBus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
