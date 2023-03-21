/* Importando ferramentas que serão
utilizadas no meu serviço */
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  /* O construtor está preenchendo a variável
  requisicaoApi com o HttpClient ferramenta
  que possibilita realizae requisições em uma
  api */
  constructor(private requisicaoApi: HttpClient) { }

  /* O metodo faz uma requisição na api
  e retorna um observavel  */
  obterMoedas(): Observable<Moeda[]> {
    return this.requisicaoApi.get<Moeda[]>(`/api/cripto/obter-moedas`);
  }
}
