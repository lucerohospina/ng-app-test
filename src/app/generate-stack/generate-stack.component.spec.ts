import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateStackComponent } from './generate-stack.component';

describe('GenerateStackComponent', () => {
  let component: GenerateStackComponent;
  let fixture: ComponentFixture<GenerateStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
