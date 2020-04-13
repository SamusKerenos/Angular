import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceResponse } from '../models';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {
  private API_URL = environment.APIEndpoint;

  constructor(private http: HttpClient) {
  }

  getListResources(page: number): Observable<ResourceResponse> {
    const url = `${this.API_URL}/unknown?`;
    const params = new HttpParams()
      .set('page', page.toString());
    return this.http.get<ResourceResponse>(url + params.toString());
  }
}
