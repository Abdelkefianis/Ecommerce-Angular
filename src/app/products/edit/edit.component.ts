import { Component, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private prodserv: ProductsService, private scatserv: ScategoriesService) { }

  prod: Product = new (Product);
  tabscat?: any

  @Input() product?: any

  display = "none"

  openModal() {
    this.display = "block"
  }

  closeModal() {
    this.display = "none"
  }

  loadScategories() {
    this.scatserv.getallScategories().subscribe((data) => { this.tabscat = data })
  }

  //loadArticle() {
  // this.prodserv.getArticle(this.product).subscribe(data => this.prod = data)
  //}

  editProduct() {
    this.prodserv.updateArticle(this.product._id, this.prod).subscribe(data => {
      this.closeModal()
      window.location.reload()
    })
  }


  ngOnInit(): void {
    this.loadScategories();
    //this.loadArticle()
    this.prod = this.product
  }



}
