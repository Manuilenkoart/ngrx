import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './example.reducer';

export namespace ExampleSelectors {
  export const state = createFeatureSelector<State>('example');
  export const count = createSelector(state, (state: State) => state.count);
  export const message = createSelector(state, (state: State) => state.message);
  export const getData = createSelector(state, (state: State) => state.data);
  export const dataLoading = createSelector(state, (state: State) => state.dataLoading)

  // export const messageAndCount = createSelector(state, (state) =>state.message + state.count);
  // export const getAllData = createSelector(state, (state) => {
  //   return {
  //     message: state.message,
  //     count: state.count
  //   }
  // })
}
