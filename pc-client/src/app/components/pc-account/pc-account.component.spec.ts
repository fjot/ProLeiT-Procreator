import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAccountComponent } from './pc-account.component';

describe('PcAccountComponent', () => {
  let component: PcAccountComponent;
  let fixture: ComponentFixture<PcAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
