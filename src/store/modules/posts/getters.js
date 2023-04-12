export const getPosts = state => state.data
export const getSinglePost = state => id => {
    return state.data.find(post => post.id === id)
}