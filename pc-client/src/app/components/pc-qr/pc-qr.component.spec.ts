import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcQrComponent } from './pc-qr.component';

describe('PcQrComponent', () => {
  let component: PcQrComponent;
  let fixture: ComponentFixture<PcQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
