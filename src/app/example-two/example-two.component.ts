import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ExampleSelectors} from '../store/example.selectors';
import {ExampleActions} from '../store/example.actions';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {
  count$: Observable<number> | undefined;
  message$: Observable<string | undefined> | undefined ;
  dataLoading$: Observable<boolean> | undefined;
  // allData$: Observable<any> | undefined;

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.store$.select(ExampleSelectors.getData).subscribe(res => {
      console.log('res', res);
    });
    this.dataLoading$ = this.store$.select(ExampleSelectors.dataLoading);
    // this.allData$ = this.store$.select(ExampleSelectors.getAllData)
  }

  getData(): void {
    this.store$.dispatch(ExampleActions.getData());
  }
}
