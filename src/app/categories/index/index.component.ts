import { Component, OnInit } from '@angular/core';
import { Categorie } from '../categorie';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  cat?: Categorie[]

  constructor(private catserv: CategoriesService) { }

  loadCategories() {
    this.catserv.getallCategories().subscribe((data: Categorie[]) => { this.cat = data });
  }

  delCategorie(id: any) {
    this.catserv.deleteCategorie(id).subscribe((data) => { this.cat = this.cat?.filter(c => c._id !== id) })
  }


  ngOnInit(): void {
    this.loadCategories();
  }

}
