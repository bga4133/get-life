import { useState, useEffect } from 'react'
import { Loader } from '../../components/Loader';
import { UsersList } from '../atoms/PostList/UsersList';
import { Post } from "../models/types/Post"
import { UserList } from '../models/types/UserList';

export const UserView = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post[]>([]);
  const [userState, setUserState] = useState<UserList[] | null>([]);
  const getDataFromApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const users = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      const userListResponse = await users.json();
      setPost(data);
      setUserState(userListResponse);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error("Obbsss error");
    }
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <>
    <div className="grid grid-cols-1 gap-3  content-around md:grid-cols-2 lg:grid-cols-3 " data-testid="imgId">
      {userState?.map(({ id, name, username, email, phone }: UserList) => (
        <UsersList
          key={id}
          id={id} 
          name={name} 
          username={username}
          email={email}
          phone={phone}
          postList={post}
       />
      ))}
    </div>
     {post == null && <p>Error...</p>}
     {isLoading &&  <Loader   />}
    </>
  );
};