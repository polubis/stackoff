import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"

const Wrapper = styled.svg`
  width: 48px;
  height: 48px;

  path {
    fill: ${THEME.black};
  }
`

const ArticlesIcon: FC = () => {
  return (
    <Wrapper
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 40H20V44H0V40Z" />
      <path d="M0 28H20V32H0V28Z" />
      <path d="M44 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.421427 18.0783 0 17.0609 0 16V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H44C45.0609 0 46.0783 0.421427 46.8284 1.17157C47.5786 1.92172 48 2.93913 48 4V16C48 17.0609 47.5786 18.0783 46.8284 18.8284C46.0783 19.5786 45.0609 20 44 20ZM4 4V16H44V4H4Z" />
      <path d="M44 48H32C30.9391 48 29.9217 47.5786 29.1716 46.8284C28.4214 46.0783 28 45.0609 28 44V32C28 30.9391 28.4214 29.9217 29.1716 29.1716C29.9217 28.4214 30.9391 28 32 28H44C45.0609 28 46.0783 28.4214 46.8284 29.1716C47.5786 29.9217 48 30.9391 48 32V44C48 45.0609 47.5786 46.0783 46.8284 46.8284C46.0783 47.5786 45.0609 48 44 48ZM32 32V44H44V32H32Z" />
    </Wrapper>
  )
}

export default ArticlesIcon
