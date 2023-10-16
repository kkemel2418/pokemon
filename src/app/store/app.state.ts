import { OnInit } from '@angular/core';
import { Store, createAction, props } from '@ngrx/store';
import { Action, createReducer, on } from '@ngrx/store';
import { ILista } from '../app.component';

export interface IAppState{
  counter: number;
  lista: ILista[];
  todos: ILista[];

}

export const AppInitialState: IAppState = {
  counter: 0,
  lista: [],
  todos: []
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');
export const setTodos = createAction('[App] Define Todos', props<{payload: ILista}> ());
export const appReducer = createReducer(
    AppInitialState,
    on(incrementaContador,(state) => {
      state = {
        ...state,
        counter:state.counter + 1
      }
      return state;
    }),
    on(decrementaContador,(state) => {
      state = {
        ...state,
        counter:state.counter - 1
      }
      return state;
    }),

    on(setTodos,(state, {payload}) =>
    {
     // state = {
        // lista: payload
      //}
      return state;
    })
)




