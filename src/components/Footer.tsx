import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { heights, dimensions, colors } from '../styles/variables'

const StyledFooter = styled.footer`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  color: ${transparentize(0.5, colors.black)};
`

const Footer: React.FC = () => (
  <StyledFooter>
    <p>Copyright Pochi Sato All Rights Reserved</p>
  </StyledFooter>
)

export default Footer
