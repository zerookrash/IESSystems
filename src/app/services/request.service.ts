import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http: HttpClient ) { }


  reqData(id) {
    let body: HttpParams = new HttpParams();
    body = {
      'usuario_id': id
    };
    const header = {
      'Accept': 'application/json; odata=verbose',
      'Content-Type': 'application/json'
    };
    this.http.post('http://201.131.20.74:8080/workingmons-ws/insumos/consultaAll', body, header)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      );
  }
}
