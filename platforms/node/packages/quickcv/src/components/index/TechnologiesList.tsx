import React, { FC } from "react"

import { Technology } from "./models"
import styled from "styled-components"
import Hexagons from "./Hexagons"

namespace TechnologiesList {
  export interface Props {
    technologies: Technology[]
  }
}

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

const TechnologiesList: FC<TechnologiesList.Props> = ({ technologies }) => {
  return (
    <Hexagons itemSize={60}>
      {technologies.map(technology => (
        <TechnologyIconWrapper key={technology.name}>
          <TechnologyIcon src={technology.icon} />
        </TechnologyIconWrapper>
      ))}
    </Hexagons>
  )
}

export default TechnologiesList
