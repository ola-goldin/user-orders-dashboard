import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {OrderActions} from './order.actions';
import { Order } from './order.model';

export interface OrderState extends EntityState<Order> {
  loaded: boolean;
}

export const orderAdapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialOrderState: OrderState = orderAdapter.getInitialState({
  loaded: false,
});

export const orderReducer = createReducer(
  initialOrderState,
  on(OrderActions.loadOrdersSuccess, (state, { orders }) =>
    orderAdapter.setAll(orders, { ...state, loaded: true })
  )
);
