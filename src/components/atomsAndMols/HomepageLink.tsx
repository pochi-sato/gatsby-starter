import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors } from '../../styles/variables'

export const HomepageLink = styled(Link)`
  color: ${colors.success};
  /* font-size: 1.5rem; */
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

export default HomepageLink
