import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ScategoriesService } from 'src/app/scategories/scategories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  openModal() {
    this.display = "block"
  }

  closeModal() {
    this.display = "none"
  }

  prod: Product = new (Product);
  tabscat?: any

  constructor(private prodserv: ProductsService, private router: Router,
    private scatserv: ScategoriesService) { }

  loadScategories() {
    this.scatserv.getallScategories().subscribe((data) => { this.tabscat = data })
  }

  addProduct() {
    this.prodserv.createArticle(this.prod).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }

  ngOnInit(): void {
    this.loadScategories();
  }

}
