import styled from "styled-components"

import { THEME } from "../styles"
import { CssUnit } from "../models"

namespace Divider {
  export interface Props {
    height?: number
    width?: number
    unit?: CssUnit
    fill?: keyof typeof THEME
  }
}

const UNIT: CssUnit = "px"
const toUnit = <T extends unknown>(value: T, unit: CssUnit = UNIT): string =>
  value + unit

const WIDTH = 8
const getWidth = ({ width, unit }: Divider.Props): string =>
  toUnit(width ?? WIDTH, unit)

const HEIGHT = 1
const getHeight = ({ height, unit }: Divider.Props): string =>
  toUnit(height ?? HEIGHT, unit)

const getBackground = ({ fill }: Divider.Props): string => fill ?? THEME.black

const Divider = styled.div<Divider.Props>`
  width: ${getWidth};
  height: ${getHeight};
  background: ${getBackground};
`

export default Divider
