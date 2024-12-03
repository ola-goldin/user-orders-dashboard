import { combineReducers } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { orderReducer } from './order/order.reducer';


export const rootReducer = combineReducers({
  users: userReducer,
  orders: orderReducer,
});