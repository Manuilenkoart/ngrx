import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import * as fromReducer from './store/example.reducer';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import {FormsModule} from '@angular/forms';
import {ExampleEffects} from './store/example.effects';
import {MyService} from './service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({example: fromReducer.reducer}),
    EffectsModule.forRoot([ExampleEffects]),
    FormsModule,
    HttpClientModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
