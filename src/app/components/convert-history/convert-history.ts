import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { HistoryItem } from '../history-item/history-item';
import { CurrentExchangeRate } from '../../service/current-exchange-rate';

interface HistoryData {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}

interface HistoryResponse {
  success: boolean;
  from: string;
  to: string;
  lastUpdatedAt: string;
  data: HistoryData[];
}

@Component({
  selector: 'convert-history',
  standalone: true,
  imports: [CommonModule, HistoryItem],
  templateUrl: './convert-history.html',
  styleUrl: './convert-history.scss'
})
export class ConvertHistory implements OnInit {
  @Input() currencyCode: string = 'USD';
  protected historyData: HistoryData[] = [];
  service = inject(CurrentExchangeRate);

  ngOnInit(): void {
    this.loadHistory();
  }


  private loadHistory(): void {

    this.service.getDailyHistory(this.currencyCode).subscribe((data: any) => {
      console.log(data);
      const response: HistoryResponse = data;
      this.historyData = response.data;
    });
  }

  protected calculateDiff(item: HistoryData): { value: number; percentage: string } {
    const diff = item.close - item.open;
    const percentage = ((diff / item.open) * 100).toFixed(2);
    return {
      value: diff,
      percentage: percentage
    };
  }
}
