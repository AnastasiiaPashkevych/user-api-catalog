import {Coordinate} from "./coordinate.interface";

export interface User {
  uuid: string;
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  imageUrl: string;
  coordinate: Coordinate;
}
