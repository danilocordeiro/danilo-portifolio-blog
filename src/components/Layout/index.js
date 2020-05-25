import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Container from "../Container"
import Footer from "../Footer"
import FooterData from "../FooterData"

import * as S from "./styled"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            position
            description
          }
        }
      }
    `
  )

  return (
    <S.Layout>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header site={site.siteMetadata} />{" "}
      </TransitionPortal>{" "}
      <S.Main>
        <Container> {children} </Container> <FooterData />
      </S.Main>{" "}
      <TransitionPortal level="bottom">
        <Footer />
      </TransitionPortal>{" "}
    </S.Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
