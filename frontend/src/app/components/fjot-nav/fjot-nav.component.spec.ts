import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FjotNavComponent } from './fjot-nav.component';

describe('FjotNavComponent', () => {
  let component: FjotNavComponent;
  let fixture: ComponentFixture<FjotNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FjotNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FjotNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
