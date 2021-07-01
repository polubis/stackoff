import styled from "styled-components"
import { createStyle } from "./createStyle"
import { TypographyConfig, TypographyProps } from "./defs"

export const createTypography = <T extends TypographyProps>({
  element,
  size,
  height,
  weight,
}: TypographyConfig) => {
  return styled[element]<T>`
    ${props => createStyle(size, weight, height, props)}
  `
}
