import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFormComponent } from './value-form.component';

describe('ValueFormComponent', () => {
  let component: ValueFormComponent;
  let fixture: ComponentFixture<ValueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
