import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useWindowResize } from "../../../utils"
import {
  CardIcon,
  EnvelopeIcon,
  GithubIcon,
  LanguageIcon,
  LinkedinIcon,
  PhoneIcon,
} from "../../icons"
import { SwipeIcon } from "../swipe-icon"

import * as style from "./Intro.module.scss"

export interface IntroProps {
  avatarUrl: string
  description: string
  firstName: string
  lastName: string
  languages: string[]
  roles: string[]
  thumbnailUrl: string
}

const Intro: FC<IntroProps> = ({
  avatarUrl,
  description,
  firstName,
  lastName,
  languages,
  roles,
  thumbnailUrl,
}) => {
  const [avatarStyle, setAvatarStyle] = useState({
    bottom: "unset",
  })
  const [avatarBorderStyle, setAvatarBorderStyle] = useState({
    bottom: "unset",
  })
  const [welcomeHidden, setWelcomeHidden] = useState(false)
  const [thmumbnailLoaded, setThumbnailLoaded] = useState(false)
  const avatarRef = useRef(null)
  const avatarBorderRef = useRef(null)
  const thumbnailRef = useRef(null)

  const calculateAvatarStyle = () => {
    if (thmumbnailLoaded && avatarRef.current) {
      // TODO: add listening on resize and apply dedicated size
      setAvatarStyle({
        bottom: -avatarRef.current.getBoundingClientRect().height / 2 + "px",
      })
      setAvatarBorderStyle({
        bottom:
          -avatarBorderRef.current.getBoundingClientRect().height / 2 + "px",
      })
    }
  }

  useWindowResize(calculateAvatarStyle)

  useEffect(() => {
    if (!thmumbnailLoaded) {
      const image = new Image()
      image.src = thumbnailUrl
      image.onload = () => {
        setThumbnailLoaded(true)
        setTimeout(() => {
          thumbnailRef.current.append(image)
        })
        setTimeout(() => {
          setWelcomeHidden(true)
        }, 8000)
      }
    }
  }, [thmumbnailLoaded])

  useLayoutEffect(() => {
    calculateAvatarStyle()
  }, [thmumbnailLoaded, avatarRef, avatarBorderRef])

  if (!thmumbnailLoaded) {
    return null
  }

  return (
    <main className={style.intro}>
      <SwipeIcon className={style.swipeIcon} />

      {welcomeHidden || (
        <div className={style.welcome}>
          <p>hello</p>
          <h1>
            I'm {firstName} {lastName}
          </h1>
        </div>
      )}

      <header className={style.header}>
        <figure className={style.thumbnail} ref={thumbnailRef}></figure>

        <div
          style={avatarBorderStyle}
          ref={avatarBorderRef}
          className={style.avatarBorder}
        />

        <figure style={avatarStyle} ref={avatarRef} className={style.avatar}>
          <img src={avatarUrl} />
        </figure>
      </header>

      <section className={style.personality}>
        <h1 className={style.username}>
          {firstName} {lastName}
        </h1>

        {roles.map(role => (
          <p key={role} className={style.role}>
            {role}
          </p>
        ))}

        <div className={style.separator} />

        <span className={style.description}>{description}</span>
      </section>

      <section className={style.languages}>
        <LanguageIcon />
        <span>{languages.join(",")}</span>
      </section>

      <footer className={style.actions}>
        <button>
          <GithubIcon />
        </button>
        <button>
          <LinkedinIcon />
        </button>
        <button>
          <PhoneIcon />
        </button>
        <button>
          <EnvelopeIcon />
        </button>
        <button>
          <CardIcon />
        </button>
      </footer>
    </main>
  )
}

export default Intro
