import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../state/user/user.model';
import { Order } from '../state/order/order.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: Array<User> = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  private orders: Array<Order> = [
    { id: 1, userId: 1, total: 100 },
    { id: 2, userId: 1, total: 200 },
    { id: 3, userId: 2, total: 150 },
  ];

  getUsers(): Observable<Array<User>> {
    return of(this.users);
  }

  getOrdersByUserId(userId: number): Observable<Array<Order>> {
    return of(this.orders.filter(order => order.userId === userId));
  }
}
