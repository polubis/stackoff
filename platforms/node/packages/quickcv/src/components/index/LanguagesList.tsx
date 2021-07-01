import React, { FC, Fragment } from "react"

import { Language } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import { Bumbo } from "../../ui/typography"
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

const isOdd = (value: number): boolean => value % 2 === 0

const getLanguageItemLabelStyle = (index: number): CSSProperties => {
  return {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "-11px",
    width: "max-content",
    [isOdd(index) ? "left" : "right"]: "42px",
  }
}

const getLanguageItemDotDividerStyle = (index: number): CSSProperties => {
  return {
    transform: isOdd(index) ? `translateX(18px)` : `translateX(-18px)`,
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
              <Bumbo style={getLanguageItemLabelStyle(i)}>
                {language.name} ({language.level})
              </Bumbo>
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
