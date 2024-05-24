import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GomasComponent } from './gomas.component';

describe('GomasComponent', () => {
  let component: GomasComponent;
  let fixture: ComponentFixture<GomasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GomasComponent]
    });
    fixture = TestBed.createComponent(GomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
