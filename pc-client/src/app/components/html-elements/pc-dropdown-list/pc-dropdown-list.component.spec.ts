import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDropdownListComponent } from './pc-dropdown-list.component';

describe('PcDropdownListComponent', () => {
  let component: PcDropdownListComponent;
  let fixture: ComponentFixture<PcDropdownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcDropdownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
