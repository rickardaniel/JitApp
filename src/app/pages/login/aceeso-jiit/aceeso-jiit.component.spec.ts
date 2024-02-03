import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceesoJiitComponent } from './aceeso-jiit.component';

describe('AceesoJiitComponent', () => {
  let component: AceesoJiitComponent;
  let fixture: ComponentFixture<AceesoJiitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceesoJiitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceesoJiitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
