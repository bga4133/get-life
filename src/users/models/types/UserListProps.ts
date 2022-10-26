import { Post } from "./Post";

export interface UserListProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    postList?: Post[];
  }