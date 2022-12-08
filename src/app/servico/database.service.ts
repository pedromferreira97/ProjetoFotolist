import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../formulario/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  cliente: Cliente[] = [];
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  
  readonly API = "http://localhost:3000/cliente/"

  constructor(private http: HttpClient) { }

  getCliente() {
    return this.http.get<Cliente[]>(this.API);
  }

  postCliente(cli: Cliente) {
    return this.http.post(this.API, JSON.stringify(cli), this.httpOptions).subscribe();
  }

  delCliente(id: Number) {
    return this.http.delete(this.API + id).subscribe();
  }

}
