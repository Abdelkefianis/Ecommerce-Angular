import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  products: Product[] = []
  constructor(private prserv: ProductsService) { }

  getproduits() {
    this.prserv.getallArticles().subscribe((data: Product[]) =>
      this.products = data)
  }

  ngOnInit(): void {
    this.getproduits()
  }


}
