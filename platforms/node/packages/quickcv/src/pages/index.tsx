import React, { useEffect, useState } from "react"

import styled from "styled-components"

import { UserThumbnail, Timeline } from "../components/index"
import { loadUser } from "../services/UsersService"
import { loadTechnologies } from "../services/TechnologiesService"
import {
  loadLanguages,
  loadLanguagesLevels,
} from "../services/LanguagesService"

const THUMBNAIL_HEIGHT = 618
const TIMELINE_WIDTH = 820
const TIMELINE_MARGIN = THUMBNAIL_HEIGHT / 2 - Timeline.AVATAR_SIZE / 2

const Layout = styled.main`
  display: flex;
  flex-flow: column;

  #timeline {
    max-width: ${TIMELINE_WIDTH}px;
    margin: ${TIMELINE_MARGIN}px auto;
  }
`

type TimelineData = Omit<Timeline.Props, "id">

export default (): React.ReactElement => {
  const [timelineData, setTimelineData] = useState<TimelineData | null>(null)

  const handleLoadTimelineData = async () => {
    try {
      // const [languages, languagesLevels, technologies, user] =
      //   await Promise.all([
      //     loadLanguages(),
      //     loadLanguagesLevels(),
      //     loadTechnologies(),
      //     loadUser("g3nK8SqM3g8iehUZvbws"),
      //   ])

      // const timelineData: Omit<Timeline.Props, "id"> = {
      //   user: {
      //     firstName: user.firstName,
      //     lastName: user.lastName,
      //     roles: user.roles,
      //     description: user.description,
      //   },
      //   technologies: technologies.filter(({ id }) =>
      //     user.technologiesIds.includes(id)
      //   ),
      //   languages: user.languages.map(({ languageId, languageLevelId }) => ({
      //     level: languagesLevels.find(({ id }) => id === languageLevelId).name,
      //     name: languages.find(({ id }) => id === languageId).name,
      //   })),
      //   education: user.education.map(item => ({
      //     ...item,
      //     from: new Date(item.from),
      //     to: new Date(item.to),
      //   })),
      //   projects: user.projects.map(project => ({
      //     ...project,
      //     from: new Date(project.from),
      //     to: new Date(project.to),
      //     technologies: project.technologiesIds.map(id =>
      //       technologies.find(t => t.id === id)
      //     ),
      //   })),
      //   work: user.work.map(item => ({
      //     ...item,
      //     from: new Date(item.from),
      //     to: new Date(item.to),
      //   })),
      //   articles: user.articles.map(article => ({
      //     ...article,
      //     date: new Date(article.date),
      //   })),
      // }
      // console.log(JSON.stringify(timelineData))
      // setTimelineData(timelineData)

      setTimelineData({
        user: {
          firstName: "Adrian",
          lastName: "Polubinski",
          roles: ["Frotend developer", "UX & UI Designer"],
          description: `Focused on good web development. All frontend frameworks fun. Everyday  working in React, Angular and Node but still have some time for playing with graphic things.`,
        },
        technologies: [
          {
            name: "rxjs",
            icon: "https://cdn.worldvectorlogo.com/logos/rxjs-1.svg",
          },
        ],
        languages: [{ level: "C2", name: "English" }],
        education: [
          {
            school: "University of Warmia and Mazury",
            from: new Date("1996-12-01T00:00:00.000Z"),
            to: new Date("1996-12-01T00:00:00.000Z"),
            title: "Engineer degree",
            path: "Information technology",
          },
        ],
        projects: [
          {
            to: new Date("1996-12-01T00:00:00.000Z"),
            name: "Project Management App",
            from: new Date("1996-12-01T00:00:00.000Z"),

            description:
              "Focused on good web development. All frontend frameworks fun. Everyday  ",
            area: "Web",
            technologies: [
              {
                name: "JavaScript",
                icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
              },
              {
                icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                name: "TypeScript",
              },
            ],
          },
        ],
        work: [
          {
            company: "Billennium",
            from: new Date("1996-12-01T00:00:00.000Z"),
            to: new Date("1996-12-01T00:00:00.000Z"),
            roles: ["Frontend developer", "UX / UI Designer"],
          },
        ],
        articles: [
          {
            description:
              "Focused on good web development. All frontend frameworks fun. Everyday  ",
            rate: 4.78,
            votes: 12,
            title: "MVP architecture in web",
            date: new Date("1996-12-01T00:00:00.000Z"),
          },
        ],
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleLoadTimelineData()
  }, [])

  return (
    <>
      <UserThumbnail height={THUMBNAIL_HEIGHT} />
      <Layout>
        {timelineData && <Timeline id="timeline" {...timelineData} />}
      </Layout>
    </>
  )
}
