import { stockReducer } from '../src/redux/SotckActions/stocks';

describe('reducer', () => {
  it('should handle initial state', () => {
    expect(stockReducer(undefined, {})).toEqual({
      coins: [],
      loading: false,
      error: null,
    });
  });

  it('should handle GET_COINS', () => {
    expect(
      stockReducer([], {
        type: 'metrics/stocks/GET_STOCK',
        payload: [{ id: 1, name: 'Bitcoin' }],
      }),
    ).toEqual({
      coins: [{ id: 1, name: 'Bitcoin' }],
    });
  });

  it('should return inital state when an unknown action is received', () => {
    expect(stockReducer(undefined, { type: 'unknown' })).toEqual({
      coins: [],
      loading: false,
      error: null,
    });
  });
});
