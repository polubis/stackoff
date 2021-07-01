import React, { FC, Fragment } from "react"

import { Education } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import { Bumbo, Laro, Roso, Vigo } from "../../ui/typography"
import styled from "styled-components"

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
  top: -38px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${EDUCATION_ITEM_CONTENT_OFFSET_X}px)`};
`

const EducationDates = styled.div`
  top: -20px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;
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
                <Space t={0} b={2}>
                  <Roso title={item.from.toLocaleDateString()}>
                    {item.from.toLocaleDateString()}
                  </Roso>
                </Space>
                <Roso title={item.to.toLocaleDateString()}>
                  {item.to.toLocaleDateString()}
                </Roso>
              </EducationDates>
              <EducationItemDetails>
                <Vigo title={item.school} slice>
                  {item.school}
                </Vigo>
                <Space t={4} b={8}>
                  <Bumbo title={item.title}>{item.title}</Bumbo>
                </Space>
                <Laro title={item.path}>{item.path}</Laro>
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
