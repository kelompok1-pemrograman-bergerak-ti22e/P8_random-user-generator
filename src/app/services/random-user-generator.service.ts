import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserGeneratorService {

  private apiURL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  async getRandomUserGenerator(): Promise<any> {
    const response$ = this.http.get(this.apiURL);
    const response = await lastValueFrom(response$);
    return response;
  }
}
