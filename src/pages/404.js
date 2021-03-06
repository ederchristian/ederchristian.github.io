import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/About/styled"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <S.MainContent>
      <h1>Page not found</h1>
      <p>Sorry, the page you were looking for could not be found.</p>
    </S.MainContent>
  </Layout>
)

export default NotFoundPage
