import axios from 'axios'

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/comments`

export function commentCreate(commentData) {
  return axios.post(`${serverUrl}/comment-create`, commentData)
}

export function commentUpdate(commentData) {
  return axios.patch(`${serverUrl}/comment-update`, commentData)
}

export function commentDelete(commentIds, postId) {
  return axios.delete(`${serverUrl}/comment-delete`, { data: { commentIds, postId } })
}

export function commentUpvote(commentId) {
  return axios.post(`${serverUrl}/comment-upvote/${commentId}`)
}

export function commentDownvote(commentId) {
  return axios.post(`${serverUrl}/comment-downvote/${commentId}`)
}

export function getCommentsByPostRef(postRef) {
  return axios.get(`${serverUrl}/get-comments-by-post-ref/${postRef}`)
}

export function getCommentsByUserId(userId) {
  return axios.get(`${serverUrl}/get-comments-by-user-id/${userId}`)
}
