import { Photo } from "./Photo";
import { Users } from "./Users";

export interface Album {
    id: number,
    userId: number,
    title: string,
    usersLists?: Users[]
    photosList?: Photo[]
} 