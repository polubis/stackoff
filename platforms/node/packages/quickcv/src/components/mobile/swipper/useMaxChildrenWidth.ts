import { MutableRefObject, useLayoutEffect, useState } from "react"

import { useWindowResize } from "../../../utils"

export const useMaxChildrenWidth = <T extends HTMLElement>(
  containerRef: MutableRefObject<T>
): number => {
  const [maxChildrenWidth, setMaxChildrenWidth] = useState(-1)

  const handleSetMaxChildrenWidth = (): void => {
    if (containerRef.current) {
      setMaxChildrenWidth(containerRef.current.getBoundingClientRect().width)
    }
  }

  useLayoutEffect(() => {
    handleSetMaxChildrenWidth()
  }, [])

  useWindowResize(handleSetMaxChildrenWidth)

  return maxChildrenWidth
}
