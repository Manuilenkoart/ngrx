import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {ExampleActions} from "../store/example.actions";

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {
  message: string | undefined;

  constructor(private store$: Store) { }

  increaseCount(): void {
    this.store$.dispatch(ExampleActions.increaseCount())
  }

  sendMessage(): void {
    this.store$.dispatch(ExampleActions.sendMessage({message: this.message}))
  }


}
