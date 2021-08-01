import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireaddComponent } from './fireadd.component';

describe('FireaddComponent', () => {
  let component: FireaddComponent;
  let fixture: ComponentFixture<FireaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
