import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcNavigationComponent } from './pc-navigation.component';

describe('PcNavigationComponent', () => {
  let component: PcNavigationComponent;
  let fixture: ComponentFixture<PcNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
