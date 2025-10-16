import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweDemoAppUtil } from './swe-demo-app-util';

describe('SweDemoAppUtil', () => {
  let component: SweDemoAppUtil;
  let fixture: ComponentFixture<SweDemoAppUtil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweDemoAppUtil],
    }).compileComponents();

    fixture = TestBed.createComponent(SweDemoAppUtil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
