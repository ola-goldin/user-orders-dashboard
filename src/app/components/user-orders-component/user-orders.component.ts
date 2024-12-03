import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { selectUserNameAndTotalSum } from '../../state/order/order.selectors';
import { selectedUser } from '../../state/user/user.selector';
import { User } from '../../state/user/user.model';
import { TotalAmountComponent } from '../total-amount/total-amount.component';
import { UserNameComponent } from '../user-name/user-name.component';


@Component({
  selector: 'app-user-orders',
  standalone: true,
  templateUrl: './user-orders.component.html',
  styleUrls: [],
  imports: [CommonModule, CardModule, FieldsetModule, TotalAmountComponent, UserNameComponent ],
})
export class UserOrdersComponent implements OnInit {
  usersTotal$!: Observable<{ userName: string; totalSum: number; }>;
  selectedUser$!: Observable<User | null | undefined>;

  constructor(private store: Store) {
    this.usersTotal$  = this.store.select(selectUserNameAndTotalSum);
    this.selectedUser$ = this.store.select(selectedUser);
  }

  ngOnInit(): void {
  }
}
