import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  qtdeProdutos: number = 200;
  produtos: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {

   /* this.productService.getProducts().subscribe(
      (data) => {
       this.produtos = data["produtos"];
      },
      (error) => {
        console.log(error);
      }
    ); */

    //this.produtos = new Array<{ nome, preco }>();
    //this.produtos.push({nome: 'Bateria', preco: 100.70});
    //this.produtos.push({nome: 'Radio', preco: 99.70});
    //this.produtos.push({nome: 'TV', preco: 50.70});
    //this.produtos.push({nome: 'Outra coisa', preco: 100.00});
  }

  getQtdeProdutos(): number{
    return this.qtdeProdutos;
  }

}
