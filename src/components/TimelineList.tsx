import * as React from 'react'
import HomepageLink from './atomsAndMols/HomepageLink'
import SectionTitle from './atomsAndMols/SectionTitle'

export type TimelineListData = {
  time?: string
  contents: {
    text: string
    link?: string
  }[]
}[]

interface Props {
  timeline: TimelineListData
}

const TimelineList: React.FC<Props> = ({ timeline }) => (
  <dl>
    {timeline.map(t => (
      <>
        <dt>{t.time || ''}</dt>
        {t.contents.map(c => (
          <dd>{c.link ? <HomepageLink to={c.link}>{c.text}</HomepageLink> : c.text}</dd>
        ))}
      </>
    ))}
  </dl>
)

export default TimelineList
