import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"
import { Full, CssUnit } from "../../models"

interface Props {
  border?: number
  size: number
  unit?: CssUnit
}

type WrapperProps = Omit<Full<Props>, "border">

type ImageProps = Full<Props>

const calculateWrapperBorderSize = ({ size, unit }: WrapperProps): string =>
  size + unit

const Wrapper = styled.figure<WrapperProps>`
  width: ${calculateWrapperBorderSize};
  height: ${calculateWrapperBorderSize};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${THEME.white};
`

const calculateImageSize = ({ size, border, unit }: ImageProps): string =>
  size - border + unit

const Image = styled.img<ImageProps>`
  width: ${calculateImageSize};
  height: ${calculateImageSize};
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.14);
`

const UserAvatar: FC<Props> = ({ border, size, unit }) => {
  return (
    <Wrapper size={size} unit={unit}>
      <Image
        border={border}
        size={size}
        unit={unit}
        src={"https://pliki.ptwp.pl/pliki/03/93/05/039305_r1_300.jpg"}
      />
    </Wrapper>
  )
}

UserAvatar.defaultProps = {
  border: 0,
  unit: "px",
}

export default UserAvatar
