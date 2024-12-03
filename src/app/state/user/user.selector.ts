import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');
export const { selectAll, selectEntities, selectIds, selectTotal } = userAdapter.getSelectors(selectUserState);

export const {
  selectAll: selectAllUsers,
  selectEntities: selectUserEntities,
} = userAdapter.getSelectors(selectUserState);

export const selectedUserId = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUserId
);

export const selectedUser = createSelector(
  selectUserState,
  selectEntities,
  (state, entities) => (state.selectedUserId ? entities[state.selectedUserId] : null)
);

