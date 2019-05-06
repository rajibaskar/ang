import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorNavComponent } from './text-editor-nav.component';

describe('TextEditorNavComponent', () => {
  let component: TextEditorNavComponent;
  let fixture: ComponentFixture<TextEditorNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextEditorNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
