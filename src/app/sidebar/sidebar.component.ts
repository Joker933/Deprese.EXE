import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  search = '';
  zapinac = false;
  vypinac = false;

  options: SearchOption[] = [
    {title: 'Home', path: 'rocco'},
    {title: 'About', path: 'about-us'},
    {title: 'Contact', path: 'home'}
  ];

  get filteredOptions(): SearchOption[] {
    const filteredOption = [];
    const search = this.search.toLowerCase();
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        filteredOption.push(option);
      }
    }
    return filteredOption;
  }


  Zapnout() {
    if (this.zapinac === true) {
      this.zapinac = false;
    } else {
      this.zapinac = true;
    }
  }
  
  VypinacTabulky() {
    if (this.vypinac === true) {
      this.vypinac = false;
    } else {
      this.vypinac = true;
    }

  }

  Vypnout() {
    this.zapinac = false;
  }

  ngOnInit() {
  }

}
class SearchOption {
  title: string;
  path: string;
}
