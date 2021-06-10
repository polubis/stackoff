import React, { FC } from "react"

import { Dots, Space } from "../../ui"
import { Technology } from "./models"
import TechnologiesIcon from "./TechnologiesIcon"
import TechnologiesList from "./TechnologiesList"

namespace TechnologiesSection {
  export interface Props {
    technologies: Technology[]
  }
}

const TechnologiesSection: FC<TechnologiesSection.Props> = ({
  technologies,
}) => {
  return (
    <>
      <Space t={20}>
        <TechnologiesIcon />
      </Space>
      <Space t={0} b={8}>
        <Dots length={4} fill="gray" />
      </Space>
      <Space t={20} b={20} style={{ width: "60%" }}>
        <TechnologiesList technologies={technologies} />
      </Space>
      <Space t={20} b={0}>
        <Dots length={4} fill="gray" />
      </Space>
    </>
  )
}

export default TechnologiesSection
