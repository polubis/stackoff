import React, { ReactElement } from "react"
import styled from "styled-components"

import { Dots, Space } from "../../ui"
import {
  UserAvatar,
  PlayButton,
  PersonalSection,
  SocialBadges,
  LanguagesSection,
  EducationSecton,
  ArticlesSection,
} from "."
import {
  Article,
  Education,
  Language,
  Project,
  Technology,
  User,
  Work,
} from "./models"
import WorkSection from "./WorkSection"
import TechnologiesSection from "./TechnologiesSection"
import ProjectsSection from "./ProjectsSection"

namespace Timeline {
  export interface Props {
    id: string
    education: Education[]
    articles: Article[]
    languages: Language[]
    projects: Project[]
    work: Work[]
    technologies: Technology[]
    user: User
  }
}

const AVATAR_SIZE = 240
const AVATAR_BORDER = 58

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  z-index: 1;
`

const Timeline = ({
  id,
  languages,
  projects,
  articles,
  education,
  work,
  technologies,
  user,
}: Timeline.Props): ReactElement => {
  return (
    <Wrapper id={id}>
      <UserAvatar border={AVATAR_BORDER} size={AVATAR_SIZE} />
      <Space>
        <Dots length={7} fill="white" />
      </Space>
      <PlayButton />
      <Space>
        <PersonalSection user={user} />
      </Space>
      <SocialBadges />
      <LanguagesSection languages={languages} />
      <EducationSecton education={education} />
      <WorkSection work={work} />
      <TechnologiesSection technologies={technologies} />
      <ProjectsSection projects={projects} />
      <ArticlesSection articles={articles} />
    </Wrapper>
  )
}

Timeline.AVATAR_SIZE = AVATAR_SIZE
Timeline.AVATAR_BORDER = AVATAR_BORDER

Timeline.defaultProps = {
  languages: [],
  projects: [],
}

export default Timeline
