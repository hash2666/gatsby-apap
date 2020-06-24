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
    <OutboundLink href="https://analytics.google.com/analytics/web/#/report-home/a166058510w237421472p222098761">
      Google アナリティクスホーム
    </OutboundLink>
  </div>
  </Layout>
)

export default SecondPage
