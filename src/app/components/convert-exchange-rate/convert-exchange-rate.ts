import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertHistory } from '../convert-history/convert-history';
import { CurrentExchangeRate } from '../../service/current-exchange-rate';

interface ExchangeRateResponse {
  success: boolean;
  lastUpdatedAt: string;
  fromSymbol: string;
  toSymbol: string;
  exchangeRate: number;
}

@Component({
  selector: 'convert-exchange-rate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ConvertHistory
  ],
  templateUrl: './convert-exchange-rate.html',
  styleUrl: './convert-exchange-rate.scss'
})
export class ConvertExchangeRate {
  protected currencyCode: string = 'USD';
  protected exchangeRate: number | null = null;
  protected lastUpdated: string = '';
  protected showHistory: boolean = false;

  service = inject(CurrentExchangeRate);

  protected onExchange(): void {
    this.service.getExchangeRate(this.currencyCode).subscribe((data: any) => {
      console.log(data);
      const response: ExchangeRateResponse = data;
      this.exchangeRate = 1 / response.exchangeRate;
      this.lastUpdated = this.formatDate(response.lastUpdatedAt);
      console.log(this.exchangeRate);
      console.log(this.lastUpdated);

    });
  }

  protected toggleHistory(): void {
    this.showHistory = !this.showHistory;
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} - ${hours}h${minutes}`;
  }
}
