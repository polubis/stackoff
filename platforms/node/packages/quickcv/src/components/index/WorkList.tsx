import React, { FC, Fragment } from "react"

import { Work } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled from "styled-components"
import { Bumbo, Vigo, Roso } from "../../ui/typography"

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
  top: -25px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${JOBS_ITEM_CONTENT_OFFSET_X}px)`};
`

const WorkDates = styled.div`
  top: -20px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;
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
                <Roso title={job.from.toLocaleDateString()} slice>
                  {job.from.toLocaleDateString()}
                </Roso>
                <Roso title={job.to.toLocaleDateString()}>
                  {job.to.toLocaleDateString()}
                </Roso>
              </WorkDates>
              <WorkItemDetails>
                <Vigo slice>{job.roles.join(" & ")}</Vigo>
                <Space t={8} b={0}>
                  <Bumbo title={job.company}>{job.company}</Bumbo>
                </Space>
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
