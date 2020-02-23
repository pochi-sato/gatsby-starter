import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import HomepageLink from './atomsAndMols/HomepageLink'
import SectionTitle from './atomsAndMols/SectionTitle'

export type ProfileData = {
  question: string
  answer: { text: string; link?: string }[]
}[]

interface Props {
  profile: ProfileData
}

const Profile: React.FC<Props> = ({ profile }) => (
  <>
    <dl>
      {profile.map(p => (
        <>
          <dt>{p.question || ''}</dt>
          {p.answer.map(c => (
            <dd>{c.link ? <HomepageLink to={c.link}>{c.text}</HomepageLink> : c.text}</dd>
          ))}
        </>
      ))}
    </dl>
  </>
)

export default Profile
