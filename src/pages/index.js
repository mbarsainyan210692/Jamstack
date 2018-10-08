import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>-Manu Barsainyan</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
