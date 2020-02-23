import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { heights, dimensions, colors } from '../../styles/variables'

export const SectionTitle = styled.h2`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

export default SectionTitle
