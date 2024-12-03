import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ChipModule } from 'primeng/chip';
import { selectUserNameAndTotalSum } from '../../state/order/order.selectors';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './user-name.component.html',
  styleUrls: [],
})
export class UserNameComponent {
  usersTotal$!: Observable<any>;

  constructor(private store: Store) {
    this.usersTotal$ = this.store.select(selectUserNameAndTotalSum).pipe(
      map((data) => data.userName || '')
    );
  }
}
