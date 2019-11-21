import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcIconsComponent } from './pc-icons.component';

describe('PcIconsComponent', () => {
  let component: PcIconsComponent;
  let fixture: ComponentFixture<PcIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
