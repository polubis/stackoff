import React, { FC } from "react"
import styled from "styled-components"

import { Dots, Space } from "../../ui"
import { Ache, Bumbo, Laro } from "../../ui/typography"
import { User } from "./models"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 82px 1fr;
  grid-template-rows: 1fr;
`

const Representation = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-top: 4px;
`

namespace PersonalSection {
  export interface Props {
    user: User
  }
}

const PersonalSection: FC<PersonalSection.Props> = ({ user }) => {
  return (
    <Container>
      <Representation>
        <Ache>hello</Ache>
        <Space t={14} b={12}>
          <Bumbo right>
            I'm {user.firstName} {user.lastName}
          </Bumbo>
        </Space>
        {user.roles.map((role, i) => (
          <Laro key={i}>{role}</Laro>
        ))}
      </Representation>
      <Dots length={14} fill="gray" />
      <Laro>{user.description}</Laro>
    </Container>
  )
}

export default PersonalSection
