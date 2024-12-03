import { selectUserOrders } from '../../state/order/order.selectors';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from '../../state/user/user.model';
import { ButtonModule } from 'primeng/button';
import { UserActions } from '../../state/user/user.actions';
import { Order } from '../../state/order/order.model';
import { selectAllUsers, selectedUser } from '../../state/user/user.selector';
import { UserOrdersComponent } from '../user-orders-component/user-orders.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserOrdersComponent,ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class OrdersStatusComponent implements OnInit {
  users$ : Observable<any[] | undefined>  = of([]);
  orders$ : Observable<ReadonlyArray<Order>> = of([]);
  selectedUser$!: Observable<User | null | undefined>;


  constructor(private store: Store) {
    this.users$  = this.store.select(selectAllUsers);
    this.orders$  = this.store.select(selectUserOrders);
    this.selectedUser$ = this.store.select(selectedUser);
  }

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }

  onUserClick(userId: number){
   this.store.dispatch(UserActions.selectUser({userId}))
  }

}
