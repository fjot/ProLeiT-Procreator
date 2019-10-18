import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcLoginComponent } from './pc-login.component';

describe('PcLoginComponent', () => {
  let component: PcLoginComponent;
  let fixture: ComponentFixture<PcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
