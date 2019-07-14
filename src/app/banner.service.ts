import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Banner } from './banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private _bannerMenuUrl = 'https://www.gramedia.com/api/banners/?per_page=7';

  constructor(private _http: Http) { }

  getHighlightMenu() {
    return this._http.get<Banner[]>(this._bannerMenuUrl)
      .pipe(map((res: Response) =>res.json())
      );
  }
}
