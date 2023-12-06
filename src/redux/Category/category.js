const GET_CATEGORY = 'metrics/categories/GET_CATEGORY';

/*  Actions are plain JavaScript objects that describe events in the application.
They must have a type property to indicate the type of action being performed.
 Actions are typically created using action creator functions. */

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  payload: category,
});

const initialState = {
  category: 'All',
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
