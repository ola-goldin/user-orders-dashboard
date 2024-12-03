import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { User } from './user.model';


export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ users: User[] }>(),
    'Load Users Failure': props<{ error: string }>(),
    'Select User': props<{ userId: number }>(),
    'Add User': props<{ user: User }>(),
    'Delete User':  props<{ userId: number }>(),
    'Update User' : props<{ user: User }>(),
    'Save Users': emptyProps(),
  },
});
