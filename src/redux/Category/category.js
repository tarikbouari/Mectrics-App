const GET_CATEGORY = 'metrics/categories/GET_CATEGORY';

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  payload: category,
});

const initialState = {
  category: 'all',
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
