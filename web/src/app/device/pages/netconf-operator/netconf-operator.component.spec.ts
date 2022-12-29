import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetconfOperatorComponent } from './netconf-operator.component';

describe('NetconfOperatorComponent', () => {
  let component: NetconfOperatorComponent;
  let fixture: ComponentFixture<NetconfOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetconfOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetconfOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
