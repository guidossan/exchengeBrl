import { Component } from '@angular/core';
import { ConvertExchangeRate } from './components/convert-exchange-rate/convert-exchange-rate';

@Component({
  selector: 'app-root',
  imports: [
    ConvertExchangeRate
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = 'exchengeBrl';
}
