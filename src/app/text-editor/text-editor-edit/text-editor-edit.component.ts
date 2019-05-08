import { Component, OnInit } from '@angular/core';
import { GoogleService } from '@app/core/google-suite/google.service';
import { GFile } from '@app/core/google-suite/gfile';

@Component({
  selector: 'zi7-text-editor-edit',
  templateUrl: './text-editor-edit.component.html',
  styleUrls: ['./text-editor-edit.component.scss']
})
export class TextEditorEditComponent implements OnInit {
  constructor(private googleService: GoogleService) {}

  ngOnInit() {}

  saveFile(): void {
    console.log('Save File');
    const gFile: GFile = {
      id: null,
      name: 'TestFile',
      data: 'This is a text',
      version: 1,
      appProperties: {},
      description: 'Desc',
      mimeType: 'Json',
      properties: {}
    };
    this.googleService.saveFile(gFile).subscribe(t => console.log(t));
  }
}
