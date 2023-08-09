import { Component } from '@angular/core';
import { NewspageComponent } from './components/newspage/newspage.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newsapi';
  parentSelectedValue: string = 'Sports';

  updateSelectedValue(event: any) {
    const newValue = event.target.value;
    if (newValue !== null) {
      this.parentSelectedValue = newValue;
    }
  }
}
