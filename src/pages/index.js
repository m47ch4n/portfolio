import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portrait from "../components/portrait"
import { breakLarge } from "../utils/valiables"

const Container = styled.main`
  display: flex;
  margin-top: 10vh;

  @media screen and (max-width: ${breakLarge}) {
    display: block;
    margin-top: 0;
  }
`

const Left = styled.div`
  flex: 1;
  text-align: end;

  @media screen and (max-width: ${breakLarge}) {
    text-align: center;
  }
`

const Right = styled.div`
  flex: 1;
  margin-top: 100px;

  h1 {
    font-size: 6rem;
    margin-left: -10px;
    margin-bottom: 0.1em;
  }

  h5 {
    margin-top: 0;
  }

  h4 {
    margin-top: 0;
  }

  h3 {
    margin-top: 0;
  }

  @media screen and (max-width: ${breakLarge}) {
    text-align: center;
    margin-top: 0;
    h1 {
      margin-top: 0;
    }
  }
`

const Links = styled.div`
  font-size: 3.5rem;

  a {
    margin-right: 0.5rem;
    text-decoration: none;
  }
`

const External = styled.a`
  box-shadow: none;
  display: inline-block;
  margin-left: 12px;
  margin-bottom: 8px;
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const { title, social } = data.site.siteMetadata

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="About" />
        <Container>
          <Left>
            <Portrait />
          </Left>
          <Right>
            <h1>まつも</h1>
            <h5>Matsumo, Shoya MATSUMOTO, m47ch4n</h5>
            <h4>An Engineer who lives and studies in Aichi.</h4>
            <p>the pillows を聴いています。</p>
            <Links>
              <h3>
                <Link
                  style={{
                    boxShadow: `none`,
                    display: "inline-block",
                    marginLeft: "12px",
                    marginBottom: "8px",
                  }}
                  to="/blog"
                >
                  /blog
                </Link>
                <External href={`https://github.com/${social.github}`}>Github</External>
                <External href={`https://gitlab.com/${social.gitlab}`}>Gitlab</External>
                <External href={`https://twitter.com/${social.twitter}`}>Twitter</External>
                <External href={`https://suzuri.jp/${social.suzuri}`}>Goods</External>
              </h3>
            </Links>
          </Right>
        </Container>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          github
          gitlab
          twitter
          suzuri
        }
      }
    }
  }
`
