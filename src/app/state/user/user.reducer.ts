import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import { UserActions } from './user.actions';


export interface UserState extends EntityState<User> {
  loaded: boolean;
  selectedUserId: number | null; 
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUserState: UserState = userAdapter.getInitialState({
  loaded: false,
  selectedUserId: null,
});

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, {
      ...state,
       loaded: true })
  ),
  on(UserActions.selectUser, (state, { userId }) => {
    if (state.selectedUserId === userId) {
      return state;
    }
    return {
      ...state,
      selectedUserId: userId,
    };
  }),
  on(UserActions.addUser, (state, { user }) => {
    const existingUser = state.entities[user.id];
    if (existingUser) {
      return userAdapter.updateOne(
        { id: user.id, changes: user },
        state
      );
    } else {
      return userAdapter.addOne(user, state);
    }
  }),
  on(UserActions.deleteUser, (state, { userId }) =>
    userAdapter.removeOne(userId, state)
  ),
  on(UserActions.updateUser, (state, { user }) =>
    userAdapter.updateOne(
      { id: user.id, changes: user },
      state
    )
  ),
  on(UserActions.saveUsers, (state) => {
    return state; 
  })

);

