import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly peopleApiUrl = 'https://swapi.dev/api/people';

  constructor(private httpClient: HttpClient) {
  }

  searchPeople(url?: string): Observable<any> {
    return this.httpClient.get(!url ? this.peopleApiUrl : url);
  }
}
