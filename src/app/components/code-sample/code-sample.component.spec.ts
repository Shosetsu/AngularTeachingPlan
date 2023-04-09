import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSampleComponent } from './code-sample.component';

describe('CodeSampleComponent', () => {
  let component: CodeSampleComponent;
  let fixture: ComponentFixture<CodeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
