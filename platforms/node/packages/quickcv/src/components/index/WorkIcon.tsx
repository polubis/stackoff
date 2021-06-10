import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"

const Wrapper = styled.svg`
  width: 48px;
  height: 48px;
`

const WorkIcon: FC = () => {
  return (
    <Wrapper viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        d="M36 39V12M45 12H3V39H45V12ZM30 12C30 12 30 6 24 6C18 6 18 12 18 12H30ZM12 39V12V39Z"
        stroke={THEME.black}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Wrapper>
  )
}

export default WorkIcon
