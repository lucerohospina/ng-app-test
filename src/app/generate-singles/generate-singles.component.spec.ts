import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSinglesComponent } from './generate-singles.component';

describe('GenerateSinglesComponent', () => {
  let component: GenerateSinglesComponent;
  let fixture: ComponentFixture<GenerateSinglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateSinglesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
