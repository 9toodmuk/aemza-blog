import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      Hello world!
    </Layout>
  )
}

export default Index
