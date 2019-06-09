import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { breakLarge, breakMediam, breakSmall } from "../utils/valiables"

const Avater = styled(Image)`
  border-radius: 50%;
  margin: 2em 2em;
  width: 300px;
  height: 300px;
  text-align: end;

  @media screen and (max-width: ${breakLarge}) {
    margin: auto;
  }

  @media screen and (max-width: ${breakMediam}) {
    margin: auto;
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: ${breakSmall}) {
    margin: auto;
    width: 200px;
    height: 200px;
  }
`

function Portrait() {
  return (
    <StaticQuery
      query={PortraitQuery}
      render={data => {
        return (
          <Avater
            fluid={data.avatar.childImageSharp.fluid}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        )
      }}
    />
  )
}

const PortraitQuery = graphql`
  query PortraitQuery {
    avatar: file(absolutePath: { regex: "/m47ch4n.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Portrait
