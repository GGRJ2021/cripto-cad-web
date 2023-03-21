import { Component, OnInit } from '@angular/core';
import { Moeda } from 'src/app/models/moeda';
import { ListagemService } from './service/listagem.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

/* O implements On Init diz para o meu
componente que ele tem uma classe de 
inicialização e que ele deve passar por 
ela antes de executar qual quer outra coisa */
export class ListagemComponent implements OnInit {

  constructor(private moedaService: ListagemService) { }

  /* Tudo que está dentro desta função
  será executado primeiro */
  ngOnInit() {

    /* Indo no serviço obter moedas
    e aguardando o retorno da api com o 
    subscribe que recebe um função com o
    parametro do tipo do retorno */
      this.moedaService
        .obterMoedas()
        .subscribe((moedas: Moeda[]) => {

          var teste = moedas;
          debugger;

        })
  }
}
