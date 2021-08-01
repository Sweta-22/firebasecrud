import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireupdateComponent } from './fireupdate.component';

describe('FireupdateComponent', () => {
  let component: FireupdateComponent;
  let fixture: ComponentFixture<FireupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
