import React, { FC, Fragment } from "react"

import { Work } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled, { css } from "styled-components"
import { THEME } from "../../styles"

namespace WorkList {
  export interface Props {
    work: Work[]
  }
}

const WorkItem = styled.div`
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

const JOBS_ITEM_CONTENT_OFFSET_X = 42
const WorkItemDetails = styled.div`
  width: 220px;
  position: absolute;
  top: -28px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${JOBS_ITEM_CONTENT_OFFSET_X}px)`};
`

const slicedText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`

const CompanyText = styled.span`
  ${slicedText}
  font-size: 24px;
  font-weight: lighter;
  color: ${THEME.black};
  margin: 2px 0 8px 0;
`

const RoleText = styled.span`
  ${slicedText}
  font-size: 18px;
  font-weight: lighter;
  color: ${THEME.black};
`

const WorkDate = styled.span`
  ${slicedText}
  font-size: 16px;
  font-weight: lighter;
`

const WorkDates = styled.div`
  top: -17px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;

  ${WorkDate} {
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`

const WorkList: FC<WorkList.Props> = ({ work }) => {
  return (
    <>
      {work.map((job, i) => (
        <Fragment key={i}>
          <Space t={0} b={8}>
            <WorkItem>
              <Dot fill="black">
                <Divider />
                <Divider />
              </Dot>
              <WorkDates>
                <WorkDate title={job.from.toLocaleDateString()}>
                  {job.from.toLocaleDateString()}
                </WorkDate>
                <WorkDate title={job.to.toLocaleDateString()}>
                  {job.to.toLocaleDateString()}
                </WorkDate>
              </WorkDates>
              <WorkItemDetails>
                <CompanyText title={job.company}>{job.company}</CompanyText>
                <RoleText>{job.roles.join(" & ")}</RoleText>
              </WorkItemDetails>
            </WorkItem>
          </Space>
          <Space t={0} b={8}>
            <Dots length={6} fill="gray" />
          </Space>
        </Fragment>
      ))}
    </>
  )
}

export default WorkList
