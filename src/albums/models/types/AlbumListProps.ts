import { Photo } from "./Photo";
import { Users } from "./Users";

export interface AlbumListProps {
    id: number;
    userId: number;
    title: string;
    usersLists?: Users[]
    photosList?: Photo[]
}