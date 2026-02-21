import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardContent
  ]
})
export class HomePage {
  
  user: any = null;
  loading: boolean = false;

  constructor(private http: HttpClient) {
    console.log('HomePage constructor', this.http);
  }

generateUser() {
  this.loading = true;
  
  // Gunakan dummy data dulu untuk testing
  setTimeout(() => {
    this.user = {
      name: { first: 'John', last: 'Doe' },
      email: 'john.doe@example.com',
      location: { city: 'Jakarta', country: 'Indonesia' },
      picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
      phone: '(021) 1234-5678'
    };
    this.loading = false;
  }, 1000);
  
  // Nanti kalau API sudah normal, uncomment ini
  /*
  this.userService.getRandomUser().subscribe({
    next: (res) => {
      if (res.results && res.results.length > 0) {
        this.user = res.results[0];
      } else {
        console.warn('Results kosong, pakai dummy data');
        this.user = this.getDummyUser();
      }
      this.loading = false;
    },
    error: (err) => {
      console.error('Error:', err);
      this.user = this.getDummyUser();
      this.loading = false;
    }
  });
  */
}

// Fungsi dummy data
getDummyUser() {
  const dummyUsers = [
    {
      name: { first: 'Budi', last: 'Santoso' },
      email: 'budi@example.com',
      location: { city: 'Jakarta', country: 'Indonesia' },
      picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
      phone: '0812-3456-7890'
    },
    {
      name: { first: 'Siti', last: 'Rahayu' },
      email: 'siti@example.com',
      location: { city: 'Surabaya', country: 'Indonesia' },
      picture: { large: 'https://randomuser.me/api/portraits/women/1.jpg' },
      phone: '0813-3456-7890'
    }
  ];
  return dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
  }
}