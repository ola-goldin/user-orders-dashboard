import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStatusComponent } from './components/dashboard/dashboard.component';
import { NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, OrdersStatusComponent, NgIf, CardModule],
})
export class AppComponent {}
