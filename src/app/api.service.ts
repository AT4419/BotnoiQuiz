import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPokemon(id: number) { //เรียกข้อมูลมาแสดง
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
