import React, { FC } from "react"
import { Language } from "./models"
import { Space, Dots, Dot } from "../../ui"
import LanguageIcon from "./LanguageIcon"
import LanguagesList from "./LanguagesList"

namespace LanguagesSection {
  export interface Props {
    languages: Language[]
  }
}

const LanguagesSection: FC<LanguagesSection.Props> = ({ languages }) => {
  return (
    <>
      <Space>
        <Dots length={4} fill="gray" />
      </Space>

      <LanguageIcon />

      <Space b={0}>
        <Dots length={3} fill="gray" />
        <Space t={6} b={6}>
          <Dot fill="gray" />
        </Space>
      </Space>

      <LanguagesList languages={languages} />
    </>
  )
}

export default LanguagesSection
