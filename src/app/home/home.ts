import { Component, inject, signal, OnInit } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private api = inject(Api);

  backendStatus = signal('Checking...');

  ngOnInit() {
    this.api.checkHealth().subscribe({
      next: (response) => {
        this.backendStatus.set(response.status);
      },
      error: (error) => {
        console.error('Backend connection failed:', error);
        this.backendStatus.set('Disconnected');
      }
    });
  }
}