import { stockReducer } from '../redux/SotckActions/stocks';

describe('reducer', () => {
  it('should handle initial state', () => {
    expect(stockReducer(undefined, [])).toEqual([]);
  });

  it('should handle GET_STOCK', () => {
    expect(
      stockReducer([], {
        type: 'metrics/stocks/GET_STOCK/',
        payload: [{ id: 1, name: 'ETH' }],
      }),
    ).toEqual([]);
  });

  it('should return inital state when an unknown action is received', () => {
    expect(stockReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
});
