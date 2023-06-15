import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuleflexComponent } from './muleflex.component';

describe('MuleflexComponent', () => {
  let component: MuleflexComponent;
  let fixture: ComponentFixture<MuleflexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuleflexComponent]
    });
    fixture = TestBed.createComponent(MuleflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
