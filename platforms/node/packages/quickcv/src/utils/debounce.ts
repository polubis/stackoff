export const debounce = (callback: (...args: any[]) => void, wait: number) => {
  let timeout = null
  return (...args: any[]) => {
    const next = () => callback(...args)
    clearTimeout(timeout)
    timeout = setTimeout(next, wait)
  }
}
