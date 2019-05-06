import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorHomeComponent } from './text-editor-home.component';

describe('TextEditorHomeComponent', () => {
  let component: TextEditorHomeComponent;
  let fixture: ComponentFixture<TextEditorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
