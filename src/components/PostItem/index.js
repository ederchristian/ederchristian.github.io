import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description
}) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg="#0e1218"
    duration={0.5}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} min to read</S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
