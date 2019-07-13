import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HighlightMenuService {
  private _highlightMenuUrl = 'https://www.gramedia.com/api/highlight-menu/';

  constructor(private _http: Http) { }

  getHighlightMenu() {
    return this._http.get(this._highlightMenuUrl)
      .pipe(
        map((res: Response) =>res.json())
      );

  }
}
