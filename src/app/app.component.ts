import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMonthly: boolean = true;

  toggleTabs(type: 'monthly' | 'annual'){
    this.isMonthly = type === 'monthly';
  }
}
