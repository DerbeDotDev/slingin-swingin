import PropTypes from 'prop-types'

import { getPostsByUserId } from '@services/post'
import { getProfileByHandle } from '@services/profile'
import { getCommentsByUserId } from '@services/comment'
import { Main as MainLayout } from '@layouts'
import { ProfileDetails as ProfileDetailsView } from '@views'
import SeoMeta from '@components/SeoMeta'

function ProfileDetails({ handle, profile, posts, comments }) {
  return (
    <>
      <SeoMeta
        title={`${handle} - bounce.dev`}
        // If data comes in getInitialProps please fill out desc with bio?!
        // desc={}
        canonical={`https://www.bounce.dev/${handle}`}
      />
      <MainLayout>
        <ProfileDetailsView handle={handle} profile={profile} posts={posts} comments={comments} />
      </MainLayout>
    </>
  )
}

ProfileDetails.getInitialProps = async ({ query }) => {
  const { handle } = query

  const profile = await getProfileByHandle(handle)
  const posts = await getPostsByUserId(profile.data.user._id)
  const comments = await getCommentsByUserId(profile.data.user._id)

  return {
    handle,
    profile: profile.data,
    posts: posts.data,
    comments: comments.data
  }
}

ProfileDetails.propTypes = {
  handle: PropTypes.string,
  profile: PropTypes.object,
  posts: PropTypes.array,
  comments: PropTypes.array
}

export default ProfileDetails
