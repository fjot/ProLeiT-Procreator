import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProIconsComponent } from './pro-icons.component';

describe('ProIconsComponent', () => {
  let component: ProIconsComponent;
  let fixture: ComponentFixture<ProIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
