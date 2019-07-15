import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HighlightMenuService {
  private _highlightMenuUrl = '/api/highlight-menu/';

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }  
  getHighlightMenu() {
    return this._http.get(this._highlightMenuUrl, this.httpOptions);
  }
}
