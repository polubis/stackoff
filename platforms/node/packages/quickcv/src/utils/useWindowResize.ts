import { useEffect } from "react"

import { debounce } from "./debounce"

type OnResize = (e: UIEvent) => void

export const useWindowResize = (onResize: OnResize) => {
  useEffect(() => {
    const handleResize = debounce(e => {
      onResize(e)
    }, 250)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [onResize])
}
