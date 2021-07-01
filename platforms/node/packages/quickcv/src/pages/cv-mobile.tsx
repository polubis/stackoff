import React from "react"
import { Intro } from "../components/mobile"

export default () => {
  return (
    <Intro
      avatarUrl="https://pliki.ptwp.pl/pliki/03/93/05/039305_r1_300.jpg"
      description={`Focused on good web development. All frontend frameworks fun. Everyday
        working in React, Angular and Node but still have some time for
        playing with graphic things.`}
      firstName="Adrian"
      lastName="Połubiński"
      languages={["English(B2), Polish(C1)"]}
      roles={["Frontend developer", "UX & UI Designer"]}
      thumbnailUrl="https://api.culture.pl/sites/default/files/styles/1920_auto/public/2019-07/bieszczady_2_en.jpg?itok=4rkVSCL8"
    />
  )
}
