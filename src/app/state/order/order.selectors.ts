import { createSelector, createFeatureSelector } from '@ngrx/store';
import { orderAdapter, OrderState } from './order.reducer';

import { UserState } from '../user/user.reducer';
import { selectedUser, selectUserState } from '../user/user.selector';

export const selectOrderState = createFeatureSelector<OrderState>('orders');


export const {
  selectAll: selectAllOrders,
  selectEntities: selectOrderEntities,
} = orderAdapter.getSelectors(selectOrderState);

export const selectOrdersByUserId = (userId: number) =>
  createSelector(selectAllOrders, orders =>
    orders.filter(order => order.userId === userId)
  );

  export const selectUserOrders = createSelector(
    selectUserState, 
    selectAllOrders, 
    (userState: UserState, orders) => {
      const selectedUserId = userState.selectedUserId; 
      if (!selectedUserId) {
        return [];
      }
      return orders.filter(order => order.userId === selectedUserId);
    }
  );

  export const selectUserNameAndTotalSum = createSelector(
    selectedUser, 
    selectAllOrders, 
    (user, orders) => {
      if (!user) {
        return { userName: '', totalSum: 0 }; 
      }
  
      const totalSum = orders
        .filter(order => order.userId === user.id) 
        .reduce((sum, order) => sum + order.total, 0); 
  
      return {
        userName: user.name,
        totalSum, 
      };
    }
  );