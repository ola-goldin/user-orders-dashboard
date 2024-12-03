import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { orderReducer } from './state/order/order.reducer';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({users: userReducer, orders: orderReducer}),
    provideAnimations(),
    provideHttpClient(),
    provideEffects([UserEffects]),
],
};
