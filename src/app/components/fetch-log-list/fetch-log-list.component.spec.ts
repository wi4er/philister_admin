import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchLogListComponent } from './fetch-log-list.component';

describe('FetchLogListComponent', () => {
  let component: FetchLogListComponent;
  let fixture: ComponentFixture<FetchLogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchLogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
