import { Component, OnInit } from '@angular/core';
import { ScategoriesService } from '../scategories.service';
import { Scategorie } from '../scategorie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  scat?: Scategorie[]

  constructor(private scatservice: ScategoriesService) { }

  loadScategories() {
    this.scatservice.getallScategories().subscribe((data: Scategorie[]) => { this.scat = data });
  }

  delScategories(id: any) {
    this.scatservice.deleteScategorie(id).subscribe((data) => { this.scat = this.scat?.filter(sc => sc._id !== id) })
  }

  ngOnInit(): void {
    this.loadScategories();
  }

}
