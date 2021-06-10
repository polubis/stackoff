import React, { FC, Fragment } from "react"

import { Project } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import styled, { css } from "styled-components"
import { THEME } from "../../styles"
import Hexagons from "./Hexagons"

namespace ProjectsList {
  export interface Props {
    projects: Project[]
  }
}

const ProjectItem = styled.div`
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

const PROJECT_ITEM_CONTENT_OFFSET_X = 42
const ProjectItemDetails = styled.div`
  width: 220px;
  position: absolute;
  top: -41px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${PROJECT_ITEM_CONTENT_OFFSET_X}px)`};
`

const slicedText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
`

const ProjectAreaText = styled.span`
  ${slicedText}
  font-size: 18px;
  font-weight: normal;
  color: ${THEME.gray};
  margin: 2px 0 8px 0;
`

const ProjectNameText = styled.span`
  ${slicedText}
  cursor: pointer;
  font-size: 24px;
  font-weight: lighter;
  margin-bottom: 14px;
  color: ${THEME.black};
`

const ProjectDescriptionText = styled.span`
  font-size: 18px;
  line-height: 28px;
  font-weight: lighter;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${THEME.black};
`

const ProjectDate = styled.span`
  ${slicedText}
  font-size: 16px;
  font-weight: lighter;
`

const ProjectDates = styled.div`
  top: -17px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;

  ${ProjectDate} {
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`

const TechnologyIconWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
`

const TechnologyIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ProjectsList: FC<ProjectsList.Props> = ({ projects }) => {
  return (
    <>
      {projects.map((project, i) => (
        <Fragment key={i}>
          {i !== 0 && (
            <Space t={0} b={8}>
              <Dots length={4} fill="gray" />
            </Space>
          )}

          <Space t={0} b={8}>
            <ProjectItem>
              <Dot fill="black">
                <Divider />
                <Divider />
              </Dot>
              <ProjectDates>
                <ProjectDate title={project.from.toLocaleDateString()}>
                  {project.from.toLocaleDateString()}
                </ProjectDate>
                <ProjectDate title={project.to.toLocaleDateString()}>
                  {project.to.toLocaleDateString()}
                </ProjectDate>
              </ProjectDates>
              <ProjectItemDetails>
                <ProjectAreaText title={project.area}>
                  {project.area}
                </ProjectAreaText>
                <ProjectNameText title={project.name}>
                  {project.name}
                </ProjectNameText>
                <ProjectDescriptionText>
                  {project.description}
                </ProjectDescriptionText>
              </ProjectItemDetails>
            </ProjectItem>
          </Space>
          <Space t={0}>
            <Dots length={12} fill="gray" />
          </Space>
          <Space
            t={0}
            b={i === projects.length - 1 ? 0 : 62}
            style={{ width: "40%" }}
          >
            <Hexagons itemSize={60} additionalRows={0}>
              {project.technologies.map(technology => (
                <TechnologyIconWrapper key={technology.name}>
                  <TechnologyIcon src={technology.icon} />
                </TechnologyIconWrapper>
              ))}
            </Hexagons>
          </Space>
        </Fragment>
      ))}
    </>
  )
}

export default ProjectsList
