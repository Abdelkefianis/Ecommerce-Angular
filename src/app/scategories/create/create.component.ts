import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScategoriesService } from '../scategories.service';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Scategorie } from '../scategorie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tabcat?: any
  scat: Scategorie = new (Scategorie);


  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  openModal() {
    this.display = "block"
  }

  closeModal() {
    this.display = "none"
  }

  constructor(private scatserv: ScategoriesService, private catserv: CategoriesService) { }


  loadcategories() {
    this.catserv.getallCategories().subscribe((data) => { this.tabcat = data })
  }

  addScategorie() {
    this.scatserv.createScategorie(this.scat).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  ngOnInit(): void {
    this.loadcategories();
  }

}
