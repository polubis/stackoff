import { css } from "styled-components"

export const row = css`
  display: flex;
  align-items: center;
`

export const col = css`
  display: flex;
  flex-flow: column;
`

export const center = css`
  ${row}
  justify-content: center;
`
