import {IPerson} from "./person.int";

export interface IPeople {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}
