import React, { useLayoutEffect, useRef, useState } from "react"

import * as style from "./Swipper.module.scss"

interface SwipperProps {
  children: React.ReactNode | React.ReactNode[]
}

export const Swipper = ({ children }: SwipperProps) => {
  const [maxChildrenWidth, setMaxChildrenWidth] = useState(-1)

  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      setMaxChildrenWidth(containerRef.current.getBoundingClientRect().width)
    }
  }, [])
  console.log(maxChildrenWidth);
  const enhancedChildren =
    maxChildrenWidth > -1 &&
    React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null
      }

      return React.cloneElement(child, {
        ...child.props,
        style: {
          ...(child.props.style ?? {}),
          width: maxChildrenWidth + 'px',
        },
      })
    })

  return (
    <div className={style.swipper} ref={containerRef}>
      <div className={style.container}>{enhancedChildren}</div>
    </div>
  )
}
