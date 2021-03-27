import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // buraya bir header koyarsak bütün http isteklerine bir autheration koymuş oluyoruz
    let token = localStorage.getItem("token");
    // yenibir request oluşturarak onun içerisine autheration header koyarak ilerleyeceğiz
    let newRequest : HttpRequest<any>; // bizim yaptığmıız istek bu
    newRequest = request.clone({
      headers:request.headers.set("Authorization","Bearer " + token)
    });
    return next.handle(request);
  }
}

/** servis bir hata verdğinde ne yapayım gibi intercepter buraya yazılabilir */