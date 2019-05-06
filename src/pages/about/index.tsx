import React from "react"
import { Link } from "gatsby"
import './about.scss'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
  </Layout>
)

export default IndexPage
