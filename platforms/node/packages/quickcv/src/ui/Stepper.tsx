import { FC } from "react"
import styled, { css } from "styled-components"

import { THEME } from "../styles"

namespace Stepper {
  export interface Props {
    steps: number
  }
}

const Wrapper = styled.div`
  display: flex;
`

const dotCss = css`
  background: ${THEME.white};
  border: 1px solid ${THEME.black};
  border-radius: 50%;
`

const InnerDot = styled.div`
  ${dotCss}
  height: 32px;
  width: 32px;
`

const OuterDot = styled.div`
  ${dotCss}
  width: 12px;
  height: 12px;
`

const Stepper: FC<Stepper.Props> = ({ steps }) => {
  return <Wrapper>
      <OuterDot />
      <InnerDot />
      <InnerDot />
      <InnerDot />
      <InnerDot />
      <OuterDot />
  </Wrapper>
}

export default Stepper
