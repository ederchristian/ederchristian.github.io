import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    margin: auto;
  `}
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  ${media.lessThan('large')`
    padding: 1rem 0;
  `}

  .active {
    color: var(--highlight);
  }

  a {
    color: var(--texts);
    text-decoration: none;
    transition: all 0.5 ease;

    &:hover {
      color: var(--highlight);
    }
  }
`

export const MenuLinksLink = styled(AniLink)`
  font-family: var(--fontInter);
  font-weight: 500;
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`
