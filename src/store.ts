import { init, RematchRootState, RematchRootDispatch } from '@rematch/core';
import * as models from './models';

// interface Store {
//   count?: number
// }

const store = init({
  models,
});

export default store;

export type Store = typeof store;
export type Dispatch = RematchRootDispatch<typeof models>;
export type RootState = RematchRootState<typeof models>;
