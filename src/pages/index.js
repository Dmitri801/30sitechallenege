import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import Image from '../components/Home/image'
import SEO from '../components/Layout/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to the 30 sites in 30 days challenge by Dmitiry Sharshiner</p>
    <p>Gonna Build Something Greeeaaattttt.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      <li>
        <Link to="/metheme/">Me Theme</Link>
      </li>
      <li>
        <Link to="/event-invite/">Event-Invite</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
