import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangPageComponent } from './lang-page.component';

describe('LangPageComponent', () => {
  let component: LangPageComponent;
  let fixture: ComponentFixture<LangPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
