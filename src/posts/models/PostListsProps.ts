import { Users } from "../../albums/models/types/Users"
import { Comments } from "./Comments"

export interface PostListsProps {
    body: string
    id: number,
    title: string,
    userId: number,
    usersLists?: Users[]
    commentList?: Comments[]
} 