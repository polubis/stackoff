import React, { FC, ReactNode, useRef, useState, useEffect } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"

const ITEM_SIZE = 56
const ADDITIONAL_ROWS = 1

namespace Hexagons {
  export interface ContainerData {}

  export interface Props {
    itemSize?: number
    additionalRows?: number
    animated?: boolean
    children: ReactNode[]
  }
}

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
`

const Hexagon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`

const HexagonIcon = styled.svg``

const HexagonChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`

// GET SIZE OF PARENT CONTAINER
// CALCULATE HEIGHT OF PARENT CONTAINER AND SET
// MAP HEXAGONS AND DO POSITIONS TRANSFORMATION

const calcInnerOffset = (containerWidth: number, itemSize: number): number =>
  (containerWidth % itemSize) / 2

const calcChildrenInRow = (containerWidth: number, itemSize): number =>
  Math.floor(containerWidth / itemSize)

const calcRowsCount = (childrenInRow: number, childrenCount: number): number =>
  Math.ceil(childrenCount / childrenInRow)

const calcContainerHeight = (rowsCount: number, itemSize: number): number =>
  rowsCount * itemSize + itemSize / 2

interface Position {
  x: number
  y: number
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const filterPositionsByRandoms = (
  positions: Position[],
  childrenCount: number
): Position[] => {
  const childrenArray = Array.from({ length: childrenCount })
  const randoms = childrenArray.map((_, i): number =>
    getRandomInt(0, positions.length - 1)
  )

  const notDuplicatedRandoms = [...new Set(randoms)]
  let filledRandoms = [...notDuplicatedRandoms]
  let acc = 0

  while (filledRandoms.length < childrenCount) {
    if (!filledRandoms.includes(acc)) {
      filledRandoms.push(acc)
    }

    acc++
  }

  return positions.filter((_, i) => filledRandoms.includes(i))
}

const isOdd = (value: number) => value % 2 === 0
const createPositions = (
  rowsCount: number,
  childrenInRow: number,
  itemSize: number,
  innerOffset: number
): Position[] => {
  const positions: Position[] = []

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < childrenInRow; j++) {
      const x = j * itemSize + innerOffset
      let y = 0

      if (isOdd(j)) {
        y = i * itemSize
      } else {
        if (i === 0) {
          y = itemSize / 2
        } else {
          y = i * itemSize + itemSize / 2
        }
      }

      positions.push({ x, y })
    }
  }

  return positions
}

const debounce = (callback, wait) => {
  let timeout = null
  return (...args) => {
    const next = () => callback(...args)
    clearTimeout(timeout)
    timeout = setTimeout(next, wait)
  }
}

const Hexagons: FC<Hexagons.Props> = ({
  children,
  itemSize,
  animated,
  additionalRows,
}) => {
  const [data, setData] = useState(null)

  const containerRef = useRef(null)

  const handleSetData = () => {
    if (containerRef && containerRef.current) {
      const width = containerRef.current.offsetWidth
      const innerOffset = calcInnerOffset(width, itemSize)
      const childrenInRow = calcChildrenInRow(width, itemSize)
      const rowsCount =
        calcRowsCount(childrenInRow, children.length) + additionalRows

      setData({
        width,
        innerOffset,
        childrenInRow,
        containerHeight: calcContainerHeight(rowsCount, itemSize),
        rowsCount,
        positions: filterPositionsByRandoms(
          createPositions(rowsCount, childrenInRow, itemSize, innerOffset),
          children.length
        ),
      })
    }
  }

  useEffect(() => {
    handleSetData()

    let interval

    if (animated) {
      interval = setInterval(handleSetData, 3000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = debounce(() => {
      handleSetData()
    }, 250)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const renderChildren = () => {
    if (!data) {
      return []
    }

    return data.positions.map((position, i) => (
      <Hexagon
        key={i}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "0.3s transform",
        }}
      >
        <HexagonChild>{children[i]}</HexagonChild>
        <HexagonIcon
          width={itemSize}
          height={itemSize}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M53.1115 28C53.1125 28.754 52.9186 29.4955 52.5487 30.1525L42.1629 48.5277C41.7811 49.2017 41.2275 49.7625 40.5584 50.1529C39.8893 50.5433 39.1287 50.7493 38.354 50.75L17.6463 50.75C16.8717 50.7493 16.1111 50.5433 15.4421 50.153C14.773 49.7626 14.2194 49.2019 13.8376 48.5279L3.45158 30.1529C3.08251 29.4954 2.88867 28.7541 2.88867 28.0001C2.88867 27.2461 3.08251 26.5048 3.45158 25.8473L13.8374 7.47228C14.2192 6.79826 14.7728 6.23749 15.4419 5.84711C16.111 5.45673 16.8716 5.2507 17.6463 5.25L38.354 5.25C39.1286 5.25069 39.8892 5.4567 40.5582 5.84704C41.2273 6.23738 41.7809 6.7981 42.1627 7.47206L52.5487 25.8471C52.9187 26.5042 53.1125 27.2458 53.1115 28V28ZM37.8437 45.5L47.7349 28L37.8439 10.5L18.1564 10.5L8.26517 28L18.1564 45.5L37.8437 45.5Z"
            fill={THEME.black}
          />
        </HexagonIcon>
      </Hexagon>
    ))
  }

  return (
    <Container
      ref={containerRef}
      style={{
        height: data ? data.containerHeight + "px" : "unset",
      }}
    >
      {renderChildren()}
    </Container>
  )
}

Hexagons.defaultProps = {
  itemSize: ITEM_SIZE,
  additionalRows: ADDITIONAL_ROWS,
  animated: true,
}

export default Hexagons
