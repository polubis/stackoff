import React, { FC } from "react"

import { Space, Dots, Button } from "../../ui"
import { Article } from "./models"
import ArticlesIcon from "./ArticlesIcon"
import ArticlesList from "./ArticlesList"

namespace ArticlesSection {
  export interface Props {
    articles: Article[]
  }
}

const ArticlesSection: FC<ArticlesSection.Props> = ({ articles }) => {
  return (
    <>
      <Space b={8}>
        <Dots length={4} fill="gray" />
      </Space>
      <Space t={20}>
        <ArticlesIcon />
      </Space>
      <Space t={0} b={8}>
        <Dots length={4} fill="gray" />
      </Space>
      <ArticlesList articles={articles} />
      <Space t={28} b={0}>
        <Button>Hire me</Button>
      </Space>
    </>
  )
}

export default ArticlesSection
