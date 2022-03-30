import {Component, OnInit} from '@angular/core';
import {SearchService} from "./services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  heroes$: any;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.search();
  }

  next(): void {
    this.search(this.heroes$.next);
  }

  previous(): void {
    this.search(this.heroes$.previous);
  }

  search(url?: string): void {
    this.searchService.searchPeople(url).subscribe(res => {
      this.heroes$ = res;
    })
  }

  lookup($event: any) {
    this.search(`https://swapi.dev/api/people/?search=${$event.target.value}`);
  }
}
