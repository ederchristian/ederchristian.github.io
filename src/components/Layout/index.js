import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import Profile from "../Profile"
import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as Styled from "./styled"
import GlobalStyles from "../../styles/global"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  )

  return (
    <Styled.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Profile
          title={site.siteMetadata.title}
          position={site.siteMetadata.position}
          description={site.siteMetadata.description}
          isMobileHeader={true}
        />
        <Sidebar
          site={site.siteMetadata}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </TransitionPortal>
      <Styled.LayoutMain>{children}</Styled.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
    </Styled.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
