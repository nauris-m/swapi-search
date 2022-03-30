import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {
  }

  searchPeople(url?: string) {
    return this.httpClient.get(!url ? 'https://swapi.dev/api/people' : url);
  }
}
