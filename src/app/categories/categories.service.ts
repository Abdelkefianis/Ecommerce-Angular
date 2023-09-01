import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseurl = "http://localhost:3001/api/categories";

  constructor(private http: HttpClient) { }

  getallCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.baseurl)
  }

  createCategorie(scat: Categorie): Observable<Categorie> {
    return this.http.post(this.baseurl, scat)
  }

  deleteCategorie(_id: any) {
    return this.http.delete(this.baseurl + _id)
  }

  editCategorie(scat: Categorie, _id: any) {

  }

  getCategorie(id: any): Observable<Categorie> {
    return this.http.get(this.baseurl + id)
  }

  updateCategorie(id: any, prod: Categorie): Observable<any> {
    return this.http.put(this.baseurl + id, prod)
  }

}

