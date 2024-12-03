import { props, createAction, createActionGroup } from '@ngrx/store';
import { Order } from './order.model';

export const OrderActions = createActionGroup({
  source: 'Order',
  events: {
    'Load Orders': props<{ userId: number }>(), 
    'Load Orders Success': props<{ orders: Order[] }>(),
    'Load Orders Failure': props<{ error: string }>(),
  },
});
