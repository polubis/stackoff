import React, { FC } from "react"
import styled from "styled-components"

import { Full, CssUnit } from "../../models"

interface Props {
  height?: number
  unit?: CssUnit
}

const Wrapper = styled.figure<Full<Props>>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height, unit }) => height + unit};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UserThumbnail: FC<Props> = ({ height, unit }) => {
  return (
    <Wrapper height={height} unit={unit}>
      <Image src="https://api.culture.pl/sites/default/files/styles/1920_auto/public/2019-07/bieszczady_2_en.jpg?itok=4rkVSCL8" />
    </Wrapper>
  )
}

UserThumbnail.defaultProps = {
  unit: 'px',
}

export default UserThumbnail
