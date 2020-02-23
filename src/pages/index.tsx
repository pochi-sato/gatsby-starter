import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import profileJson from '../content/profile.json'
import historyJson from '../content/history.json'
import mediaJson from '../content/media.json'
import Profile from '../components/Profile'
import SectionTitle from '../components/atomsAndMols/SectionTitle'
import TimelineList from '../components/TimelineList'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Link to="/page-2">ページ2へ</Link>
        <h1>Gatsby Starter</h1>
        <Profile profile={profileJson.profile} />
        <SectionTitle>HISTORY</SectionTitle>
        <TimelineList timeline={historyJson.history} />
        <SectionTitle>MEDIA</SectionTitle>
        <TimelineList timeline={mediaJson.media} />
        <SectionTitle>CONTACT</SectionTitle>
        <ContactForm />
        <Footer />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
