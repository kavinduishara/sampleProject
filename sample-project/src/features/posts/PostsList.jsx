import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postsSlice'

function PostsList() {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.posts?.posts ?? [])
	const status = useSelector(state => state.posts?.status)
	const error = useSelector(state => state.posts?.error)

	useEffect(() => {
		if (status === 'idle') dispatch(fetchPosts())
	}, [status, dispatch])

	return (
		<div className="max-w-3xl mx-auto p-4">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-2xl font-semibold">Posts</h2>
				<button
					className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
					onClick={() => dispatch(fetchPosts())}
				>
					Reload
				</button>
			</div>

			{status === 'loading' && <p className="text-gray-500">Loading...</p>}
			{status === 'failed' && <p className="text-red-500">Error: {error}</p>}

			<div className="grid gap-4">
				{posts.map(post => (
					<article key={post.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
						<h3 className="font-semibold mb-2">{post.title}</h3>
						<p className="text-gray-700">{post.body}</p>
					</article>
				))}
			</div>
		</div>
	)
}

export default PostsList
