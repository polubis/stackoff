import React, { FC, Fragment } from "react"

import { Article } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import { Bumbo, Paold, Laro, Roso } from "../../ui/typography"
import styled from "styled-components"

namespace ArticlesList {
  export interface Props {
    articles: Article[]
  }
}

const ArticleItem = styled.div`
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

const ARTICLE_ITEM_CONTENT_OFFSET_X = 42
const ArticleItemDetails = styled.div`
  width: 220px;
  position: absolute;
  top: -33px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${ARTICLE_ITEM_CONTENT_OFFSET_X}px)`};
`

const ArticleStats = styled.div`
  display: flex;
  align-items: center;

  ${Dot} {
    margin: 0 8px;
    width: 6px;
    height: 6px;
  }
`

const ArticleDateWrapper = styled.div`
  top: -9px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;
`

const ArticlesList: FC<ArticlesList.Props> = ({ articles }) => {
  return (
    <>
      {articles.map((article, i) => (
        <Fragment key={i}>
          <Space t={0} b={8}>
            <ArticleItem>
              <Dot fill="black">
                <Divider />
                <Divider />
              </Dot>
              <ArticleDateWrapper>
                <Roso title={article.date.toLocaleDateString()}>
                  {article.date.toLocaleDateString()}
                </Roso>
              </ArticleDateWrapper>
              <ArticleItemDetails>
                <ArticleStats>
                  <Paold>{article.rate}</Paold>
                  <Dot fill="gray" />
                  <Paold>{article.votes} votes</Paold>
                </ArticleStats>
                <Space t={4} b={8}>
                  <Bumbo title={article.title} slice>
                    {article.title}
                  </Bumbo>
                </Space>
                <Laro>{article.description}</Laro>
              </ArticleItemDetails>
            </ArticleItem>
          </Space>
          <Space t={0} b={8}>
            <Dots length={13} fill="gray" />
          </Space>
        </Fragment>
      ))}
    </>
  )
}

export default ArticlesList
