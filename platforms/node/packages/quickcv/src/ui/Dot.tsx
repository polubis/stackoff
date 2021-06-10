import styled from "styled-components"

import { THEME } from "../styles"

namespace Dot {
  export interface Props {
    fill: keyof typeof THEME
  }
}

const Dot = styled.div<Dot.Props>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ fill }) => THEME[fill]};
`

export default Dot
