import { Injectable } from '@angular/core';
import {Examen} from "./examen";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./overtredingen.json");
  }

  searchExamen(opnameplaatsStraat: string): string {
  let examen = localStorage.getItem(opnameplaatsStraat);
  return examen;
  }
  listExamen(): string[] {
    let overtredingen = [];
    for (let i=0; i< localStorage.length; i++){
      let examen = localStorage.key(i);
      let result = localStorage.getItem(examen);
      overtredingen.push(result);
    }
    return overtredingen;
  }

}


