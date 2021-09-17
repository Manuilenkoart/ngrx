import {Action, createReducer, on} from "@ngrx/store";
import {ExampleActions} from "./example.actions";

export interface State {
  count: number;
  message?: string;
  data?: any;
  dataLoading: boolean;
}

const initialState: State = {
  count: 0,
  dataLoading: false
}

const exampleReducer = createReducer(
  initialState,
  on(ExampleActions.increaseCount, (state) => ({
    ...state,
    count: state.count + 1,
  })),

  on(ExampleActions.sendMessage, (state, {message}) => ({
    ...state,
    message
  })),

  on(ExampleActions.getDataSuccess, (state, {data}) => ({
    ...state,
    data,
    dataLoading: false
  })),

  on(ExampleActions.getData, (state) => ({
    ...state,
    dataLoading: true
  }))
);


export function reducer(state: State | undefined, action: Action): State {
  return exampleReducer(state, action);
}
