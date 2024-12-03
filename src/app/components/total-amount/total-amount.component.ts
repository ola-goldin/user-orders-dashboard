import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ChipModule } from 'primeng/chip';
import { selectUserNameAndTotalSum } from '../../state/order/order.selectors';
@Component({
  selector: 'app-total-amount',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './total-amount.component.html',
  styleUrls: [],
})
export class TotalAmountComponent {
  usersTotal$!: Observable<any>;

  constructor(private store: Store) {
    this.usersTotal$  = this.store.select(selectUserNameAndTotalSum).pipe(
      map((data) => data.totalSum)
    );;
  }
}
