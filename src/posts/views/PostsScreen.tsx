import { useEffect, useState } from 'react'
import { Loader } from '../../components/Loader';
import { Post } from '../../users/models/types/Post';
import { UserList } from '../../users/models/types/UserList';
import { PostList } from '../atoms/PostList';
import { Comments } from '../models/Comments';

export const PostsScreen = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [post, setPost] = useState<Post[]>([]);
    const [userState, setUserState] = useState<UserList[]>([]);
    const [commentState, setCommentState] = useState<Comments[]>([]);
    const [search, setSearch] = useState<string>(''); 
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        const userListResponse = await users.json();
        const commentsListResponse = await comments.json();
        setPost(data);
        setUserState(userListResponse);
        setCommentState(commentsListResponse)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw new Error("Obbsss error");
      }
    };
    useEffect(() => {
    getPost();
    }, []);
  return (
    <>
      <form className='formContainer mt-5 ml-5' onSubmit={e => e.preventDefault()}>   
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" value={search} placeholder="Seach..." onChange={event => setSearch(event.target.value)} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
      </form>
      <div className="grid grid-cols-1 gap-3  content-around md:grid-cols-2 lg:grid-cols-3 " data-testid="imgId">
      {
        post?.filter(post => {
          if (search === '') {
            return post;
          } else if (post.title.toLowerCase().includes(search.toLowerCase())) {
            return post;
          }
          return ''
        }).map(({ userId, id, title, body }: Post) => (
          <PostList
            key={id}
            id={id} 
            userId={userId}
            title={title}
            body={body}
            usersLists={userState}
            commentList={commentState}
          />
        ))
      }
      </div>
     {post == null && <p>Error...</p>}
     {isLoading &&  <Loader   />}
    </>
  )
}
