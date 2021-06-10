import React, { FC } from "react"

import { Space, Dots } from "../../ui"
import WorkIcon from "./WorkIcon"
import WorkList from "./WorkList"
import { Work } from "./models"

namespace WorkSection {
  export interface Props {
    work: Work[]
  }
}

const WorkSection: FC<WorkSection.Props> = ({ work }) => {
  return (
    <>
      <Space t={20}>
        <WorkIcon />
      </Space>
      <Space t={0} b={8}>
        <Dots length={4} fill="gray" />
      </Space>
      <WorkList work={work} />
    </>
  )
}

export default WorkSection
