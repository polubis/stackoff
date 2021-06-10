import React, { FC } from "react"
import { Project } from "./models"
import { Space, Dots, Dot } from "../../ui"
import ProjectsIcon from "./ProjectsIcon"
import ProjectsList from "./ProjectsList"

namespace ProjectsSection {
  export interface Props {
    projects: Project[]
  }
}

const ProjectsSection: FC<ProjectsSection.Props> = ({ projects }) => {
  return (
    <>
      <Space>
        <ProjectsIcon />
      </Space>

      <Dots length={3} fill="gray" />
      <Space t={6} b={6}>
        <Dot fill="gray" />
      </Space>

      <ProjectsList projects={projects} />
    </>
  )
}

export default ProjectsSection
