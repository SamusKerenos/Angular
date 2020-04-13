import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../models';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private API_URL = environment.APIEndpoint;

  constructor(private http: HttpClient) {
  }

  getListUsers(page: number): Observable<UserResponse> {
    const url = `${this.API_URL}/users?`;
    const params = new HttpParams()
      .set('page', page.toString());
    return this.http.get<UserResponse>(url + params.toString());
  }
}
