import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "realisations"}}) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
                sizes
                aspectRatio
                presentationWidth
                presentationHeight
                originalName
              }
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
