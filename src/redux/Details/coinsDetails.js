const DETAILS = 'stocks/details/DETAILS';

export const getDetails = (payload) => ({
  type: DETAILS,
  payload,
});

const initialState = {
  details: [],
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};

export default detailsReducer;
