import { useState } from "react"
import { UserListProps } from "../../models/types/UserListProps"
//import { Post } from "../../models/types/Post"

export const UsersList = ({ id, name, username, email, phone, postList  }: UserListProps) => {
  const [post, setPost] = useState<any>([]);
  const [itemDetail, setShowItemDetail] = useState<boolean>(false);
  const handleShowPost = () => {
    const postResult = postList?.filter(item => item.userId === id)
    setPost(postResult)
    setShowItemDetail(true);
  }
  const closeModal = () => {
    setShowItemDetail(false);
  };
  return (
    <>
      <div className="mt-10 ml-1 md:ml-5 mt-6 lg:ml-5 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <svg
          className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clipRule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {username}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {email}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {phone}
        </p>
        <button
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleShowPost}
        >
          See my post
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      {itemDetail && (
        <>
          <button
            className="mt-5 mb-5 ml-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={closeModal}
          >
            Close
          </button>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post !== null && <>{post ? post.length : ''} Post</>}
          </p>
        </>
        )}
      </div>
    </>
  )
}
