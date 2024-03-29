import React from "react"
import propTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as Styled from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <Styled.PaginationWrapper>
    {!isFirst && (
      <AniLink to={prevPage} cover direction="left" bg="#0e1218" duration={0.5}>
        ← previous page
      </AniLink>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg="#0e1218"
        duration={0.5}
      >
        next page →
      </AniLink>
    )}
  </Styled.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
