import React, { Component } from 'react'
import SEO from '../components/Layout/seo'
import Layout from '../components/Layout/layout'
import Header from '../components/EventInvite/Header'
import Footer from '../components/EventInvite/Footer'
import Home from '../components/EventInvite/Home'
import Story from '../components/EventInvite/Story'
import Wedding from '../components/EventInvite/Wedding'
import '../components/EventInvite/event-invite.css'
class EventInvite extends Component {
  renderPage = () => {
    const { pathname } = this.props.location
    const n = pathname.lastIndexOf('/')
    const pageId = pathname.substring(n + 1)

    switch (pageId) {
      case '':
        return <Home />
      case 'story':
        return <Story />
      case 'wedding':
        return <Wedding />
      case 'party':
        return <div>Party Page</div>
      case 'details':
        return <div>Details Page</div>
      case 'register':
        return <div>Register Page</div>
      default:
        return <div>Home Page</div>
    }
  }

  render() {
    const { pathname } = this.props.location
    const n = pathname.lastIndexOf('/')
    const pageId = pathname.substring(n + 1)
    return (
      <Layout>
        <SEO
          title="Day Two"
          subTitle="Event Invite Theme"
          keywords={[`30 days 30 sites`, `front end challenge`, `react`]}
        />
        <Header pageId={pageId} />
        {this.renderPage()}
        <Footer />
      </Layout>
    )
  }
}

export default EventInvite
