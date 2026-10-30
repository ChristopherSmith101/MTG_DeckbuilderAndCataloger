import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface HealthResponse {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);

  checkHealth() {
    return this.http.get<HealthResponse>('/api/health');
  }
}