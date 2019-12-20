import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private httpClient: HttpClient) { }

  saveData(serviceUrl, data: any) {
    return this.httpClient.post(serviceUrl, data);
  }
}
