import React, { FC } from "react"

import { Space, Dots } from "../../ui"
import EducationIcon from "./EducationIcon"
import EducationList from "./EducationList"
import { Education } from "./models"

namespace EducationSecton {
  export interface Props {
    education: Education[]
  }
}

const EducationSecton: FC<EducationSecton.Props> = ({ education }) => {
  return (
    <>
      <Space t={20}>
        <EducationIcon />
      </Space>
      <Space t={0} b={8}>
        <Dots length={4} fill="gray" />
      </Space>
      <EducationList education={education} />
    </>
  )
}

export default EducationSecton
