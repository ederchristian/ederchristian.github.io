import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  display: flex;
  background: var(--mediumBackground);
  border-top: 1px solid var(--borders);
  border-bottom: 1px solid var(--borders);
  margin: 0 6.5rem;

  ${media.lessThan("large")`
    font-size: .9rem;
    line-height: 1.3;
    padding: 2rem 1rem;
    margin: initial;
  `}
`

export const RecommendedLink = styled(AniLink)`
  display: flex;
  align-items: center;
  background: var(--mediumBackground);
  width: 50%;
  padding: 3rem;
  transition: background 0.5s;
  font-family: var(--fontInter);
  text-decoration: none;
  color: var(--highlight);
  font-size: 1.4rem;

  ${media.lessThan("large")`
    padding: 1rem;
    line-height: 1.6;
  `}

  &:hover {
    background: var(--borders);
  }

  &.previous {
    border-right: 1px solid var(--borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
