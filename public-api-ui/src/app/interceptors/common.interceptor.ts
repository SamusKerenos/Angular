import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // здесь будет располагаться логика для добавления токена аутентификации когда он понадибиться (если)
    console.log(`request type: ${req.method} to ${req.url}`);
    return next.handle(req);
  }
}

export const CommonInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CommonInterceptor,
  multi: true
};
