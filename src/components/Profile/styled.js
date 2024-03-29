import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProfileWrapper = styled.section`
  display: ${props => (props.isMobileHeader ? "none" : "flex")};
  color: var(--texts);

  ${media.lessThan("large")`
    display: ${props => (props.isMobileHeader ? "flex" : "none")};
    align-items: flex-start;
    justify-content: center;
    background: var(--mediumBackground);
    border-bottom: 1px solid var(--borders);
    padding: 1rem;
    width: 100vw;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`

export const ProfilePosition = styled.h1`
  display: none;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`
