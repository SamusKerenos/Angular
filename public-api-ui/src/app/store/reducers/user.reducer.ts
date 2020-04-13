import { UserActionType, UserActionAnnotations } from '../actions/user.actions';
import { InitialUserState, UserState } from '../state/user.state';

export const UserReducer = (
  state = InitialUserState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case UserActionAnnotations.LoadUserListComplete: {
      if (action.payload.data) {
        return {
          ...state,
          users: action.payload.data,
          ad: action.payload.ad,
          page: action.payload.page,
          per_page: action.payload.per_page,
          total: action.payload.total,
          total_pages: action.payload.total_pages
        };
      } else {
        return state;
      }
    }
    case UserActionAnnotations.DeleteUser: {
      return {
        ...state,
        users: state.users.filter(item => {
          return item.id !== action.payload.id;
        })
      };
    }
    default: {
      return state;
    }
  }
};
