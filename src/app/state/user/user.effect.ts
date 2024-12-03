import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { UserActions } from './user.actions';
import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../services/users.service';
import { OrderActions } from '../order/order.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );
  loadUserOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.selectUser),
      switchMap(({ userId }) =>
        this.userService.getOrdersByUserId(userId).pipe(
          map(orders => OrderActions.loadOrdersSuccess({ orders })),
          catchError(error => of(OrderActions.loadOrdersFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private userService: UserService) {}
}
