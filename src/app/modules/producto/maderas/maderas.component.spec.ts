import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaderasComponent } from './maderas.component';

describe('MaderasComponent', () => {
  let component: MaderasComponent;
  let fixture: ComponentFixture<MaderasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaderasComponent]
    });
    fixture = TestBed.createComponent(MaderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
