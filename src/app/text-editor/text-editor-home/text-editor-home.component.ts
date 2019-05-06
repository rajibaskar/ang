import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TextEditorService } from '../text-editor.service';

@Component({
  selector: 'zi7-text-editor-home',
  templateUrl: './text-editor-home.component.html',
  styleUrls: ['./text-editor-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextEditorHomeComponent implements OnInit {
  constructor(private textEditorService: TextEditorService) {}

  ngOnInit() {
    console.log(this.textEditorService);
  }
}
