import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPeople} from "../interfaces/people.int";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly apiUrl = 'https://swapi.dev/api/people';

  constructor(private httpClient: HttpClient) {
  }

  searchPeople(url?: string): Observable<IPeople> {
    return this.httpClient.get<IPeople>(!url ? this.apiUrl : url);
  }

  lookupPerson(searchText: string): Observable<IPeople> {
    return this.searchPeople(this.apiUrl + `/?search=${searchText}`);
  }
}
