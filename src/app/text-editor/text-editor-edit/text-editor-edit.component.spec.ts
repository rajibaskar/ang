import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorEditComponent } from './text-editor-edit.component';

describe('TextEditorEditComponent', () => {
  let component: TextEditorEditComponent;
  let fixture: ComponentFixture<TextEditorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorEditComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
