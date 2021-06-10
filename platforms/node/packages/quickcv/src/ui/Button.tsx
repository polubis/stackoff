import styled from "styled-components"

import { THEME } from "../styles"

namespace Button {
  export interface Props {}
}

const Button = styled.button<Button.Props>`
  background: none;
  border: 2px solid ${THEME.black};
  padding: 10px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  color: ${THEME.black};
  cursor: pointer;
  background: ${THEME.white};

  &:focus {
    outline: none;
  }
`

export default Button
