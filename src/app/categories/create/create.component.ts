import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Categorie } from '../categorie';
import { CategoriesService } from '../categories.service';
import { ScategoriesService } from 'src/app/scategories/scategories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tabscat?: any
  cat: Categorie = new (Categorie);


  @ViewChild('myModal') myModal!: ElementRef;

  display = "none";

  openModal() {
    this.display = "block"
  }

  closeModal() {
    this.display = "none"
  }

  constructor(private catserv: CategoriesService, private scatserv: ScategoriesService) { }


  loadscategories() {
    this.scatserv.getallScategories().subscribe((data) => { this.tabscat = data })
  }

  addCategorie() {
    this.scatserv.createScategorie(this.cat).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  ngOnInit(): void {
    this.loadscategories();
  }


}
