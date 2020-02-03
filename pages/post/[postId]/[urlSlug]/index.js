import PropTypes from 'prop-types'

import { Main as MainLayout } from '@layouts'
import { PostDetails as PostDetailsView } from '@views'
import { SeoMeta } from '@components'

function PostDetails({ postId, urlSlug }) {
  return (
    <>
      <SeoMeta
        title={`${urlSlug} - bounce.dev`}
        // If data comes in getInitialProps please fill out desc with post body!?
        // desc={}
        canonical={`https://www.bounce.dev/post/${postId}/${urlSlug}`}
      />
      <MainLayout>
        <PostDetailsView postId={postId} urlSlug={urlSlug} />
      </MainLayout>
    </>
  )
}

PostDetails.getInitialProps = ({ query }) => {
  const { postId, urlSlug } = query
  return { postId, urlSlug }
}

PostDetails.propTypes = {
  postId: PropTypes.string,
  urlSlug: PropTypes.string
}

export default PostDetails
