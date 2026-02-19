import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent} from '@ionic/angular/standalone';

import { RandomUserGeneratorService } from '../services/random-user-generator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent],
})
export class HomePage {

  user: any = null;
  loading: boolean = false;

  constructor(private randomUserGeneratorService: RandomUserGeneratorService) {}

  // WAJIB async/await
  async generateUser() {
    try {
      this.loading = true;

      const response = await this.randomUserGeneratorService.getRandomUserGenerator();

      this.user = response.results[0];

    } catch (error) {
      console.error('Terjadi error:', error);
    } finally {
      this.loading = false;
    }
  }
}
