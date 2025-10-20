import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// async thunk to fetch posts from jsonplaceholder
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	// fetch first 20 posts for brevity
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
	if (!res.ok) throw new Error('Network response was not ok')
	return res.json()
})

const initialState = {
	posts: [],       // array of post objects { id, title, body, ... }
	status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action) {
			// allow adding new posts locally (caller should provide { id?, title/name, body/content })
			// normalize shape: accept either {name, content} or {title, body}
			const payload = action.payload
			const newPost = {
				id: payload.id ?? Date.now(),
				title: payload.title ?? payload.name ?? '',
				body: payload.body ?? payload.content ?? '',
			}
			state.posts.unshift(newPost)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				// map JSONPlaceholder fields to our post shape if needed
				state.posts = action.payload.map(p => ({ id: p.id, title: p.title, body: p.body }))
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
