import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #00d59f;
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  width: 32px;
  height: 32px;
`
