import React, { Component } from 'react'
import SEO from '../components/Layout/seo'
import Layout from '../components/Layout/layout'
import Header from '../components/DayOne/Header'
import Showcase from '../components/DayOne/Showcase'
import WhatAmI from '../components/DayOne/WhatAmI'
import Where from '../components/DayOne/Where'
import MobileMenu from '../components/DayOne/MobileMenu'
import Footer from '../components/DayOne/Footer'
import '../components/DayOne/day-one.css'
class DayOne extends Component {
  state = {
    mobile: false,
    navBarOpen: false,
  }
  componentDidMount() {
    if (window.innerWidth < 776) {
      this.setState({ mobile: true })
    } else {
      this.setState({ mobile: false })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 776) {
        this.setState({ mobile: true })
      } else {
        this.setState({ mobile: false })
      }
    })
  }

  toggleNavBar = () => {
    this.setState(prevState => ({
      navBarOpen: !prevState.navBarOpen,
    }))
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Day One"
          subTitle="Simply Me Theme"
          keywords={[`30 days 30 sites`, `front end challenge`, `react`]}
        />
        <div className="dayOne-body">
          <Header toggleNavBar={this.toggleNavBar} />
          <MobileMenu
            navBarOpen={this.state.navBarOpen}
            mobile={this.state.mobile}
          />
          <Showcase
            mobile={this.state.mobile}
            navBarOpen={this.state.navBarOpen}
          />
          <WhatAmI />
          <Where />
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default DayOne
