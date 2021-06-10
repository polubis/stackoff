import React, { FC, Fragment } from "react"

import { Education } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled, { css } from "styled-components"
import { THEME } from "../../styles"

namespace EducationList {
  export interface Props {
    education: Education[]
  }
}

const EducationItem = styled.div`
  position: relative;

  ${Divider} {
    flex-shrink: 0;

    &:first-of-type {
      transform: translateX(18px);
    }

    &:last-of-type {
      transform: translateX(-26px);
    }
  }

  ${Dot} {
    display: flex;
    align-items: center;
  }
`

const EDUCATION_ITEM_CONTENT_OFFSET_X = 42
const EducationItemDetails = styled.div`
  width: 220px;
  position: absolute;
  top: -35px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${EDUCATION_ITEM_CONTENT_OFFSET_X}px)`};
`

const slicedText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`

const SchoolText = styled.b`
  ${slicedText}
  font-size: 18px;
  font-weight: normal;
  color: ${THEME.gray};
`

const TitleText = styled.span`
  ${slicedText}
  font-size: 24px;
  font-weight: lighter;
  color: ${THEME.black};
  margin: 4px 0 8px 0;
`

const PathText = styled.span`
  ${slicedText}
  font-size: 18px;
  color: ${THEME.black};
  font-weight: lighter;
`

const EducationDate = styled.span`
  ${slicedText}
  font-size: 16px;
  font-weight: lighter;
`

const EducationDates = styled.div`
  top: -17px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;

  ${EducationDate} {
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`

const EducationList: FC<EducationList.Props> = ({ education }) => {
  return (
    <>
      {education.map((item, i) => (
        <Fragment key={i}>
          <Space t={0} b={8}>
            <EducationItem>
              <Dot fill="black">
                <Divider />
                <Divider />
              </Dot>
              <EducationDates>
                <EducationDate title={item.from.toLocaleDateString()}>
                  {item.from.toLocaleDateString()}
                </EducationDate>
                <EducationDate title={item.to.toLocaleDateString()}>
                  {item.to.toLocaleDateString()}
                </EducationDate>
              </EducationDates>
              <EducationItemDetails>
                <SchoolText title={item.school}>{item.school}</SchoolText>
                <TitleText title={item.title}>{item.title}</TitleText>
                <PathText title={item.path}>{item.path}</PathText>
              </EducationItemDetails>
            </EducationItem>
          </Space>
          <Space t={0} b={8}>
            <Dots length={8} fill="gray" />
          </Space>
        </Fragment>
      ))}
    </>
  )
}

export default EducationList
