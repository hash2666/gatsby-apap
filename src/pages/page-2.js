import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div>
    <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/">
      Visit the Google Analytics plugin page!
    </OutboundLink>
  </div>
  </Layout>
)

export default SecondPage
