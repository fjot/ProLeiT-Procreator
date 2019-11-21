import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcDeployComponent } from './pc-deploy.component';

describe('PcDeployComponent', () => {
  let component: PcDeployComponent;
  let fixture: ComponentFixture<PcDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
