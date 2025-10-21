import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface HistoryData {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-item.html',
  styleUrl: './history-item.scss'
})
export class HistoryItem {
  @Input() data!: HistoryData;
  @Input() index: number = 0;

  protected get formattedDate(): string {
    const date = new Date(this.data.date);
    return date.toLocaleDateString('pt-BR');
  }

  protected get diff(): number {
    return this.data.close - this.data.open;
  }

  protected get diffPercentage(): string {
    const percentage = (this.diff / this.data.open) * 100;
    return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  }

  protected get isPositive(): boolean {
    return this.diff >= 0;
  }

  protected get avatarLetter(): string {
    return String.fromCharCode(65 + (this.index % 26));
  }

  protected convertToReais(value: number): number {
    return 1 / value;
  }
}
