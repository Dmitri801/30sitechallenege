import React, { Component } from 'react'
import SEO from '../components/Layout/seo'
import Layout from '../components/Layout/layout'
import Header from '../components/Me/Header'
import Showcase from '../components/Me/Showcase'
import WhatAmI from '../components/Me/WhatAmI'
import Where from '../components/Me/Where'
import MobileMenu from '../components/Me/MobileMenu'
import Footer from '../components/Me/Footer'
import '../components/Me/me.css'
class Me extends Component {
  state = {
    mobile: false,
    navBarOpen: false,
  }
  componentDidMount() {
    if (window.innerWidth < 776) {
      this.setState({ mobile: true })
    } else {
      this.setState({ mobile: false, navBarOpen: false })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 776) {
        this.setState({ mobile: true })
      } else {
        this.setState({ mobile: false, navBarOpen: false })
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
            toggleNavBar={this.toggleNavBar}
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

export default Me
