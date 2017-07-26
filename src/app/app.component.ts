import { getCountForDates } from './store/dates/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import * as fromRoot from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(store: Store<fromRoot.State>) {
    store.select(fromRoot.getCountForDates).subscribe(console.log.bind(console));
    store.select(fromRoot.getRaceDays).subscribe(console.log.bind(console));
    store.select(fromRoot.getDates).subscribe(console.log.bind(console));
  }
}
