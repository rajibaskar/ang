import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TextModel } from './text-model';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {
  DEFAULT_FIELDS =
    'id,title,mimeType,userPermission,editable,copyable,shared,fileSize';

  constructor(private httpClient: HttpClient) {}

  retrieveStock(symbol: string): Observable<TextModel> {
    return this.httpClient
      .get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
      .pipe(
        map((stock: any) => ({
          id: stock.symbol
        }))
      );
  }
}
