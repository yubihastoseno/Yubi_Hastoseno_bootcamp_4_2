import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiService {
  nama: string;
  biaya: string;
  durasi: string;
  courselist: object[] = [
    { 'id': 1, 'nama': 'PHP', 'biaya': '1000', 'durasi': '3 bulan' },
    { 'id': 2, 'nama': 'OOP', 'biaya': '1000', 'durasi': '3 bulan' },
    { 'id': 3, 'nama': 'JavaScript', 'biaya': '1000', 'durasi': '3 bulan' }
  ];
  constructor() {

  }

}
