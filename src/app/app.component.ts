import { Component } from '@angular/core';
interface SearchOption {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Router';
  search = '';
  rolled = false;
  options: {title: string, path: string}[] = [
    {title: 'Home', path: 'rocco'},
    {title: 'kontakty', path: 'home'},
    {title: 'About-us', path: 'about-us'}];

  get filteredOptions(): SearchOption[] {
    const result = [];
    const search = this.search.toLowerCase();
    if (search.length === 0) {
      return this.options;
    }
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        result.push(option);
      }
    }
    return result;
  }
}
