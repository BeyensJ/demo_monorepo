import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweDemoAppDomain } from './swe-demo-app-domain';

describe('SweDemoAppDomain', () => {
  let component: SweDemoAppDomain;
  let fixture: ComponentFixture<SweDemoAppDomain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweDemoAppDomain],
    }).compileComponents();

    fixture = TestBed.createComponent(SweDemoAppDomain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
