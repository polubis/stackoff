import React, { FC, Fragment } from "react"

import { Article } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled, { css } from "styled-components"
import { THEME } from "../../styles"

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
  top: -30px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${ARTICLE_ITEM_CONTENT_OFFSET_X}px)`};
`

const slicedText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
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

const statText = css`
  font-size: 14px;
  color: ${THEME.black};
`

const RateText = styled.span`
  ${statText}
`

const VotesText = styled.span`
  ${statText}
`

const TitleText = styled.span`
  ${slicedText}
  font-size: 24px;
  font-weight: lighter;
  color: ${THEME.black};
  margin: 6px 0 12px 0;
`

const DescriptionText = styled.span`
  color: ${THEME.black};
  font-size: 18px;
  line-height: 28px;
  font-weight: lighter;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const ArticleDate = styled.span`
  ${slicedText}
  font-size: 16px;
  font-weight: lighter;
`

const ArticleDateWrapper = styled.div`
  top: -5px;
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
                <ArticleDate title={article.date.toLocaleDateString()}>
                  {article.date.toLocaleDateString()}
                </ArticleDate>
              </ArticleDateWrapper>
              <ArticleItemDetails>
                <ArticleStats>
                  <RateText>{article.rate}</RateText>
                  <Dot fill="gray" />
                  <VotesText>{article.votes} votes</VotesText>
                </ArticleStats>
                <TitleText title={article.title}>{article.title}</TitleText>
                <DescriptionText>{article.description}</DescriptionText>
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
