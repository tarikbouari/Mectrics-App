const HISTORY = 'stocks/details/HISTORY';

export const getHistory = (payload) => ({
  type: HISTORY,
  payload,
});

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case HISTORY:
      return {
        ...state,
        history: action.payload,
      };

    default:
      return state;
  }
};

export default historyReducer;
