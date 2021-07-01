import React, { FC, Fragment } from "react"

import { Project } from "./models"
import { Space, Dots, Dot, Divider } from "../../ui"
import { Bumbo, Vigo, Roso, Laro } from "../../ui/typography"
import styled from "styled-components"
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
  top: -37px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(${PROJECT_ITEM_CONTENT_OFFSET_X}px)`};
`

const ProjectDates = styled.div`
  top: -21px;
  position: absolute;
  width: 220px;
  display: flex;
  flex-flow: column;
  transform: ${() => `translateX(-100%)`};
  align-items: flex-end;
  padding-right: 34px;
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
                <Space t={0} b={2}>
                  <Roso title={project.from.toLocaleDateString()}>
                    {project.from.toLocaleDateString()}
                  </Roso>
                </Space>
                <Roso title={project.to.toLocaleDateString()}>
                  {project.to.toLocaleDateString()}
                </Roso>
              </ProjectDates>
              <ProjectItemDetails>
                <Vigo title={project.area}>{project.area}</Vigo>
                <Space t={4} b={8}>
                  <Bumbo title={project.name} slice>
                    {project.name}
                  </Bumbo>
                </Space>
                <Laro>{project.description}</Laro>
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
