import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../dialogs/message/message.component';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  private API_URL = environment.APIEndpoint;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog) {
  }

  say(message: string) {
    this.dialog.open(MessageComponent, {
      maxWidth: 600,
      minWidth: 300,
      data: message
    });
  }

  makeHttpError(): Observable<HttpErrorResponse> {
    const url = `${this.API_URL}/user/23`;
    return this.http.get<HttpErrorResponse>(url);
  }
}
