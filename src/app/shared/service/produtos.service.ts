import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  private readonly API = "http://localhost:8080/api/produtos";

  constructor(private httpCliente : HttpClient) { }

  listarTodos(): Observable<Array<Produto>> {
    return this.httpCliente.get<Array<Produto>>(this.API);
  }
}
