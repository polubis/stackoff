import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"
import { Dots } from "../../ui"
import { User } from "./models"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 82px 1fr;
  grid-template-rows: 1fr;
`

const Info = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-top: 8px;
`

const Hello = styled.h2`
  color: ${THEME.black};
  font-size: 24px;
  font-weight: bolder;
`

const SelfIntro = styled.h3`
  text-align: right;
  color: ${THEME.black};
  font-size: 24px;
  font-weight: lighter;
  margin: 18px 0 16px 0; ;
`

const Role = styled.span`
  color: ${THEME.black};
  font-size: 18px;
  font-weight: lighter;

  &:first-of-type {
    margin-bottom: 14px;
  }
`

const Description = styled.span`
  margin-top: 8px;
  color: ${THEME.black};
  font-size: 18px;
  font-weight: lighter;
  line-height: 30px;
`

namespace PersonalSection {
  export interface Props {
    user: User
  }
}

const PersonalSection: FC<PersonalSection.Props> = ({ user }) => {
  return (
    <Wrapper>
      <Info>
        <Hello>hello</Hello>
        <SelfIntro>
          I'm {user.firstName} {user.lastName}
        </SelfIntro>
        {user.roles.map((role, i) => (
          <Role key={i}>{role}</Role>
        ))}
      </Info>
      <Dots length={14} fill="gray" />
      <Description>{user.description}</Description>
    </Wrapper>
  )
}

export default PersonalSection
