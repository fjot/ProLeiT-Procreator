import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcSaveComponent } from './pc-save.component';

describe('PcSaveComponent', () => {
  let component: PcSaveComponent;
  let fixture: ComponentFixture<PcSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
