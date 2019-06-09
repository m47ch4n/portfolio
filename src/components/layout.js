import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { maxWidth, breakLarge } from "../utils/valiables"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${maxWidth};
  padding: ${rhythm(1.0)} ${rhythm(3 / 4)};

  h1 {
    font-size: 3.5rem;
  }
`

const Footer = styled.footer`
  display: flex;
  margin-top: 3rem;
  font-size: 12px;

  @media screen and (max-width: ${breakLarge}) {
    display: block;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Container>
        <header>{header}</header>
        {children}
        <Footer>
          © {new Date().getFullYear()} {` `}
          <a href="https://www.m47ch4n.net">m47ch4n</a>, {` `} Built with {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    )
  }
}

export default Layout
