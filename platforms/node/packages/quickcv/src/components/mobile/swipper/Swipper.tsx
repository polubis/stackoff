import React, { CSSProperties, useMemo, useRef, useState } from "react"

import { useMaxChildrenWidth } from "./useMaxChildrenWidth"

import * as style from "./Swipper.module.scss"

interface SwipperProps {
  children: React.ReactNode | React.ReactNode[]
  full?: boolean
  auto?: boolean
  disabled?: boolean
}

type Direction = "right" | "left" | "none"

interface Position {
  prev: number
  curr: number
  direction: Direction
  distance: number
}

const calculateDistance = (
  startEventClientX: number,
  moveEventClientX: number
): number => Math.abs(moveEventClientX - startEventClientX)

const calculateDirection = (
  startEventClientX: number,
  moveEventClientX: number
): Direction => {
  const notMoved = startEventClientX === moveEventClientX

  if (notMoved) {
    return "none"
  }

  if (startEventClientX < moveEventClientX) {
    return "left"
  }

  return "right"
}

const calculcateMovePosition = (
  prev: number,
  startEventClientX: number,
  moveEventClientX: number,
  childrenLength: number,
  maxChildrenWidth: number
): Position => {
  const distance = calculateDistance(startEventClientX, moveEventClientX)
  const direction = calculateDirection(startEventClientX, moveEventClientX)
  const curr = -(prev + startEventClientX - moveEventClientX)
  const isLeftEdge = curr > 0

  if (isLeftEdge) {
    return { prev, curr: 0, direction, distance }
  }

  const maxRightMove = Math.floor(
    Math.abs((childrenLength - 1) * maxChildrenWidth)
  )
  const isRightEdge = Math.abs(curr) > maxRightMove

  if (isRightEdge) {
    return { prev, curr: -maxRightMove, direction, distance }
  }

  return { prev, curr, direction, distance }
}

const calculateEndPosition = ({
  curr,
  direction,
  distance,
}: Position): Position => {
  return {
    prev: Math.abs(curr),
    curr: curr,
    direction,
    distance,
  }
}

const getChildrenLength = (
  children: React.ReactNode | React.ReactNode[]
): number => {
  if (!Array.isArray(children)) {
    return children !== undefined ? 1 : 0
  }

  return children.length
}

const calculateAutoEndPosition = (
  { curr, direction, distance }: Position,
  childrenLength: number,
  maxChildrenWidth: number
): Position => {
  // TODO - finish auto adjustment
  const edges = Array.from(
    { length: childrenLength },
    (_, i) => ((i + 1) * maxChildrenWidth) / 2
  )
  const maxEdge = edges.reduce(
    (acc, edge) => (distance > edge ? edge : acc),
    0
  )
  const maxEdgeIdx = edges.findIndex(edge => edge === maxEdge)
  let newCurr = 0

  if (maxEdgeIdx !== -1) {
    newCurr = -((maxEdgeIdx + 1) * maxChildrenWidth)
  }

  if (newCurr > edges[edges.length - 1]) {
    newCurr = edges[edges.length - 1]
  }

  return {
    prev: Math.abs(newCurr),
    curr: newCurr,
    direction,
    distance,
  }
}

export const Swipper = ({ children, full, auto, disabled }: SwipperProps) => {
  const [position, setPosition] = useState<Position>({
    prev: 0,
    curr: 0,
    direction: "none",
    distance: 0,
  })
  const [unselectable, setUnselectable] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const maxChildrenWidth = useMaxChildrenWidth(containerRef)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (disabled) {
      return
    }

    const startEventClientX = e.touches[0].clientX

    const handleTouchMove = (e: TouchEvent): void => {
      setPosition(({ prev }) =>
        calculcateMovePosition(
          prev,
          startEventClientX,
          e.touches[0].clientX,
          getChildrenLength(children),
          maxChildrenWidth
        )
      )
    }

    const handleTouchCancel = (e: TouchEvent): void => {
      setPosition(({ prev }) =>
        calculcateMovePosition(
          prev,
          startEventClientX,
          e.touches[0].clientX,
          getChildrenLength(children),
          maxChildrenWidth
        )
      )
    }

    const handleTouchEnd = (): void => {
      document.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("touchcancel", handleTouchCancel)
      document.removeEventListener("touchmove", handleTouchMove)

      setPosition(position =>
        auto
          ? calculateAutoEndPosition(
              position,
              getChildrenLength(children),
              maxChildrenWidth
            )
          : calculateEndPosition(position)
      )
      setUnselectable(false)
    }

    document.addEventListener("touchend", handleTouchEnd)
    document.addEventListener("touchcancel", handleTouchCancel)
    document.addEventListener("touchmove", handleTouchMove)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (disabled) {
      return
    }

    setUnselectable(true)

    const startEventClientX = e.clientX

    const handleMouseMove = (e: MouseEvent) => {
      setPosition(({ prev }) =>
        calculcateMovePosition(
          prev,
          startEventClientX,
          e.clientX,
          getChildrenLength(children),
          maxChildrenWidth
        )
      )
    }

    const handleMouseUp = () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mousemove", handleMouseMove)

      setPosition(calculateEndPosition)
      setUnselectable(false)
    }

    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mousemove", handleMouseMove)
  }

  const enhancedChildren =
    maxChildrenWidth > -1 &&
    (Array.isArray(children) ? children : [children]).map((child, idx) => {
      return (
        <div key={idx} style={{ width: maxChildrenWidth + "px" }}>
          {child}
        </div>
      )
    })

  const containerStyle = useMemo(
    (): CSSProperties => ({
      transform: `translateX(${position.curr}px)`,
    }),
    [position]
  )

  const swipperStyle = useMemo(
    (): CSSProperties => ({ height: full ? "100vh" : "initial" }),
    [full]
  )

  console.log(position)

  return (
    <div
      className={style.swipper}
      style={swipperStyle}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className={`${style.container} ${
          unselectable ? style.unselectable : ""
        }`}
        style={containerStyle}
      >
        {enhancedChildren}
      </div>
    </div>
  )
}
