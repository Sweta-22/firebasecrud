import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirelistComponent } from './firelist.component';

describe('FirelistComponent', () => {
  let component: FirelistComponent;
  let fixture: ComponentFixture<FirelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
