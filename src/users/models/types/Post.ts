import { Users } from "../../../albums/models/types/Users"
import { Comments } from "../../../posts/models/Comments"

export interface Post {
    body: string
    id: number,
    title: string,
    userId: number,
    usersLists?: Users[],
    commentList?: Comments[]
} 