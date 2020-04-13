import { ResourceActionType, ResourceActionAnnotations } from '../actions/resource.actions';
import { InitialResourceState, ResourceState } from '../state/resource.state';

export const ResourceReducer = (
  state = InitialResourceState,
  action: ResourceActionType
): ResourceState => {
  switch (action.type) {
    case ResourceActionAnnotations.LoadResourceListComplete: {
      if (action.payload.data) {
        return {
          ...state,
          resources: action.payload.data,
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
    case ResourceActionAnnotations.DeleteResource: {
      return {
        ...state,
        resources: state.resources.filter(item => {
          return  item.id !== action.payload.id;
        })
      };
    }
    default: {
      return state;
    }
  }
};
