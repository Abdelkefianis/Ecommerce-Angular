import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  prod?: Product[];
  constructor(private prservice: ProductsService) { }

  loadProducts() {
    this.prservice.getallArticles().subscribe((data: Product[]) => { this.prod = data });
  }

  ngOnInit(): void {

    this.loadProducts();

  }

}
