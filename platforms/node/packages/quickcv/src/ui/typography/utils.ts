import { css } from "styled-components"

export const slice = (sliceable: boolean) =>
  sliceable
    ? css`
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
      `
    : css``
