import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "./services/search.service";
import {Observable} from "rxjs";
import {IPeople} from "./interfaces/people.int";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  @ViewChild('name') lookupInput: any;

  people$: Observable<IPeople>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.search();
  }

  next(nextUrl: string | undefined): void {
    if (nextUrl) {
      this.search(nextUrl);
    }
  }

  previous(previousUrl: string | undefined): void {
    if (previousUrl) {
      this.search(previousUrl);
    }
  }

  lookup($event: any) {
    this.people$ = this.searchService.lookupPerson($event.target.value);
  }

  clearLookup(): void {
    this.lookupInput.nativeElement.value = '';
    this.search();
  }

  private search(url?: string): void {
    this.people$ = this.searchService.searchPeople(url);
  }
}
