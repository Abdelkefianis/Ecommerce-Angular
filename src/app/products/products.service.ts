import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseurl = "http://localhost:3001/api/articles/";

  constructor(private http: HttpClient) { }

  getallArticles(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseurl)
  }

  createArticle(prod: Product): Observable<Product> {
    return this.http.post(this.baseurl, prod)
  }

  deleteArticle(_id: any) {
    return this.http.delete(this.baseurl + _id)
  }

  editArticle(prod: Product, _id: any) {

  }

  getArticle(id: any): Observable<Product> {
    return this.http.get(this.baseurl + id)
  }

  updateArticle(id: any, prod: Product): Observable<any> {
    return this.http.put(this.baseurl + id, prod)
  }
}
