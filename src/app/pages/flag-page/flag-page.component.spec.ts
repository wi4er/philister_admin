import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagPageComponent } from './flag-page.component';

describe('FlagPageComponent', () => {
  let component: FlagPageComponent;
  let fixture: ComponentFixture<FlagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
