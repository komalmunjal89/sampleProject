import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppComponent } from './customerApp.component';

describe('CustomerAppComponent', () => {
  let component: CustomerAppComponent;
  let fixture: ComponentFixture<CustomerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
