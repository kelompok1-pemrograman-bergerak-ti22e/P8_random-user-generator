import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserGeneratorService {

  constructor(private http: HttpClient) { }

  // Menggunakan DummyJSON (lebih stabil)
  getRandomUser(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/users/random').pipe(
      map((res: any) => {
        // Konversi ke format yang sama dengan randomuser.me
        return {
          results: [{
            name: { 
              first: res.firstName, 
              last: res.lastName 
            },
            email: res.email,
            location: { 
              city: res.address?.city || 'Unknown', 
              country: res.address?.country || 'Unknown' 
            },
            picture: { 
              large: res.image || 'https://robohash.org/' + res.id 
            },
            phone: res.phone
          }]
        };
      })
    );
  }
  
  // Atau gunakan ReqRes API
  getRandomUserReqRes(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=1').pipe(
      map((res: any) => {
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const user = res.data[randomIndex];
        return {
          results: [{
            name: { 
              first: user.first_name, 
              last: user.last_name 
            },
            email: user.email,
            location: { 
              city: 'Unknown', 
              country: 'Unknown' 
            },
            picture: { 
              large: user.avatar 
            },
            phone: '(021) 1234-5678'
          }]
        };
      })
    );
  }
}