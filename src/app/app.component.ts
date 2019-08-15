import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Array<string> = [];
  publishedFeeds: AngularFireList<any>;
  constructor(public db: AngularFireDatabase) {
    this.publishedFeeds = db.list('published');

    const x = this.publishedFeeds;

    x.snapshotChanges().subscribe(item => {
      this.data = [];
      // tslint:disable-next-line:no-shadowed-variable
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.data.push(y as string);
        // console.log(this.data);
      });
    {
      }
    });
  }
}
