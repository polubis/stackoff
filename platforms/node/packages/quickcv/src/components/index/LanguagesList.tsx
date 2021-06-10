import React, { FC, Fragment } from "react"

import { Language } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled, { CSSProperties } from "styled-components"

namespace LanguagesList {
  export interface Props {
    languages: Language[]
  }
}

const LanguageItem = styled.div`
  position: relative;

  ${Divider} {
    flex-shrink: 0;
  }

  ${Dot} {
    display: flex;
    align-items: center;
  }
`

const BOTTOM_OFFSET = 9
const LanguageItemLabel = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  font-size: 22px;
  bottom: -${BOTTOM_OFFSET}px;
  width: max-content;
  font-weight: lighter;
`

const isOdd = (value: number): boolean => value % 2 === 0

const LABEL_OFFSET_X = 42
const getLanguageItemLabelStyle = (index: number): CSSProperties => {
  const labelOffsetX = LABEL_OFFSET_X + "px"

  if (isOdd(index)) {
    return {
      left: labelOffsetX,
    }
  }

  return {
    right: labelOffsetX,
  }
}

const DIVIDER_OFFSET_X = 18
const getLanguageItemDotDividerStyle = (index: number): CSSProperties => {
  if (isOdd(index)) {
    return {
      transform: `translateX(${DIVIDER_OFFSET_X}px)`,
    }
  }

  return {
    transform: `translateX(-${DIVIDER_OFFSET_X}px)`,
  }
}

const LanguagesList: FC<LanguagesList.Props> = ({ languages }) => {
  return (
    <>
      {languages.map((language, i) => (
        <Fragment key={i}>
          <Space t={0} b={8}>
            <LanguageItem>
              <Dot fill="black">
                <Divider style={getLanguageItemDotDividerStyle(i)} />
              </Dot>
              <LanguageItemLabel style={getLanguageItemLabelStyle(i)}>
                {language.name} ({language.level})
              </LanguageItemLabel>
            </LanguageItem>
          </Space>
          <Space t={0} b={8}>
            <Dots length={4} fill="gray" />
          </Space>
        </Fragment>
      ))}
    </>
  )
}

export default LanguagesList
