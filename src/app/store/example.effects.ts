import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {MyService} from '../service';
import {ExampleActions} from './example.actions';

@Injectable()
export class ExampleEffects {
  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(ExampleActions.getData),
    mergeMap(() => this.myService.getStuff().pipe(
      map(toDo => {
        return ExampleActions.getDataSuccess({data: toDo});
      })
    ))
  ));

  constructor(private actions$: Actions,
              private myService: MyService) {
  }
}
