import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentExchangeRate {
  private apiUrl = 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/';

  constructor(private http: HttpClient) {}

  getExchangeRate(to_symbol: string) {
    const url = `${this.apiUrl}currentExchangeRate`;
    return this.http.get<any>(url, { params: { apiKey: 'RVZG0GHEV2KORLNA', from_symbol: 'BRL', to_symbol } });
  }

  getDailyHistory(to_symbol: string) {
    const url = `${this.apiUrl}dailyExchangeRate`;
    return this.http.get<any>(url, { params: { apiKey: 'RVZG0GHEV2KORLNA', from_symbol: 'BRL', to_symbol } });
  }
}
