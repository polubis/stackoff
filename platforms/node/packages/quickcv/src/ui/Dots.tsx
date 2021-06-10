import React, { FC } from "react"
import styled from "styled-components"

import Dot from "./Dot"

interface Props extends Dot.Props {
  length: number
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${Dot} {
    &:not(:last-of-type) {
      margin-bottom: 6px;
    }
  }
`

const Dots: FC<Props> = ({ fill, length }) => {
  return (
    <Container>
      {Array.from({ length })
        .fill(0)
        .map((_, i) => (
          <Dot key={i} fill={fill} />
        ))}
    </Container>
  )
}

export default Dots
