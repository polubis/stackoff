import React, { FC, DetailedHTMLProps, InputHTMLAttributes } from "react"

import { Label } from "../typography"
import { THEME } from "../../styles"

import styled from "styled-components"

namespace Input {
  export interface Props
    extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {}
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  border-radius: 4px;
  border: 1px solid ${THEME.gray};

  input {
    padding: 12px 14px;
    background: transparent;
    width: 100%;
    border: none;
    font-family: inherit;
    height: 100%;
    font-size: 14px;
  }
`

const Input: FC<Input.Props> = ({ ...inputProps }) => {
  return (
    <Wrapper>
      <input {...inputProps} />
    </Wrapper>
  )
}

export default Input
