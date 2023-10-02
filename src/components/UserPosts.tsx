import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from '@/types'

const UserPosts = ({ postOwner }: { postOwner: string }) => {
  const posts = useSelector((state: any) => state.posts)
  const userPosts = posts.filter((post: Post) => post.username === postOwner)

  return (
    <div className="py-10 text-gray-700">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Posts by {postOwner}:
      </h2>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {userPosts.map((post: Post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:bg-blue-100"
          >
            <img
              src={post.imageUrl}
              alt={post.description}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPosts
