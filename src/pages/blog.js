import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Blog = ({node}) => {
  const title = node.frontmatter.title || node.frontmatter.slug
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

const Pic = ({node}) => {
  const title = node.frontmatter.title || node.frontmatter.slug
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <small>{` `}</small>
      <small>{node.frontmatter.description || node.excerpt}</small>
      <Img
        imgStyle={{height: "150px"}}
        style={{
          height: "150px",
          margin: "0 -1.3125rem",
        }}
        durationFadeIn={1000}
        fluid={node.frontmatter.pic.childImageSharp.fluid}
      />
    </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        {posts.map(({ node }) =>  {
          const key = node.frontmatter.slug
          switch (node.frontmatter.type) {
            case "pic": return <Pic key={key} node={node} />
            default: return <Blog key={key} node={node} />
          }
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" }}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            description
            type
            pic {
              childImageSharp {
                fluid(maxHeight: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
