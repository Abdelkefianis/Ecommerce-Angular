import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scategorie } from './scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {

  private baseurl = "http://localhost:3001/api/scategories/";
  constructor(private http: HttpClient) { }

  getallScategories(): Observable<Scategorie[]> {
    return this.http.get<Scategorie[]>(this.baseurl)
  }

  createScategorie(scat: Scategorie): Observable<Scategorie> {
    return this.http.post(this.baseurl, scat)
  }

  deleteScategorie(_id: any) {
    return this.http.delete(this.baseurl + _id)
  }

  editScategorie(scat: Scategorie, _id: any) {

  }

  getScategorie(id: any): Observable<Scategorie> {
    return this.http.get(this.baseurl + id)
  }

  updateScategorie(id: any, prod: Scategorie): Observable<any> {
    return this.http.put(this.baseurl + id, prod)
  }
}
