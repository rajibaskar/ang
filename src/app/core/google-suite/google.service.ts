import { Injectable } from '@angular/core';
import { GFile } from './gfile';
import { Observable } from 'rxjs';
import { GoogleLoginService } from '../google-auth/google-login.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private googleLoginService: GoogleLoginService) {}

  public saveFile(gFile: GFile): Observable<boolean> {

    return Observable.create(obs => {

      const boundary = '-------314159265358979323846';
      const delimiter = '\r\n--' + boundary + '\r\n';
      const close_delimit = '\r\n--' + boundary + '--';

      const contentType = 'application/json';

      const metadata = {
        name: gFile.name,
        mimeType: contentType
      };

      const multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n\r\n' +
        gFile.data +
        close_delimit;

      const request = this.googleLoginService.getGAPI().client.request({
        path: '/upload/drive/v3/files',
        method: 'POST',
        params: { uploadType: 'multipart' },
        headers: {
          'Content-Type': 'multipart/related; boundary="' + boundary + '"'
        },
        body: multipartRequestBody
      });

      request.execute(c => console.log(c));

      obs.next(true);
    });
  }
}
