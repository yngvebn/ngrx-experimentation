import { DateEffects } from './store/dates/dates.effects';
import { FetchDates } from './store/dates/dates.actions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromRoot from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([DateEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(store: Store<fromRoot.State>) {
    store.dispatch(new FetchDates());
  }
}
