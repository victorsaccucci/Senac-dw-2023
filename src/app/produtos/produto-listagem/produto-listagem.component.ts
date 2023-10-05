import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss']
})

export class ProdutoListagemComponent implements OnInit {

  
  public produtos: Array<Produto> = new Array();

  constructor(private produtoService: ProdutosService){
  }

  ngOnInit(): void {
    this.buscarProdutos();
  }
  
  buscarProdutos(){
    this.produtoService.listarTodos().subscribe(
      resultado => {
        this.produtos = resultado;
      },
      erro => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }
}
