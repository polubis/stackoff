import { css } from "styled-components"
import { TypographyProps } from "./defs"

const sliced = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`

const getTextAlign = (
  left: boolean,
  center: boolean,
  right: boolean
): string => {
  if (left) {
    return "left"
  }

  if (center) {
    return "center"
  }

  if (right) {
    return "right;"
  }

  return "initial"
}

export const createStyle = (
  fontSize: number,
  fontWeight: string,
  lineHeight: number,
  { slice, left, center, right }: TypographyProps
) => css`
  text-align: ${getTextAlign(left, center, right)};
  font-size: ${fontSize + "px"};
  font-weight: ${fontWeight};
  line-height: ${lineHeight + "px"};
  margin: 0;
  padding: 0;
  ${slice ? sliced : ""}
`
