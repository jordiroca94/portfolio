import type { RefObject } from "react"
import { useState, useRef, useEffect, useCallback } from "react"

type Callback = (entry: IntersectionObserverEntry) => void

type Options = IntersectionObserverInit & {
  disconnect?: boolean
  disconnectOnIntersection?: boolean
}

export function useIntersectionObserver(
  element: RefObject<HTMLElement>,
  options?: Options
): boolean

export function useIntersectionObserver(
  element: RefObject<HTMLElement>,
  callback?: Callback,
  options?: Options
): boolean

/**
 * ```tsx
 * // Basic Usage
 * const intersecting = useIntersectionObserver(ref)
 *
 * // With `Options`
 * useIntersectionObserver(ref, {
 *   rootMargin: "0px 0px 2500px",
 *   disconnectOnIntersection: true,
 * })
 *
 * // With a callback
 * useIntersectionObserver(ref, entry => console.log(entry))
 *
 * // With `Options` and a callback
 * useIntersectionObserver(
 *   ref,
 *   entry => console.log(entry),
 *   {
 *     rootMargin: "0px 0px 2500px",
 *     disconnectOnIntersection: true,
 *   },
 * )
 * ```
 */
export default function useIntersectionObserver(
  element: RefObject<HTMLElement>,
  callbackOrOptions?: Callback | Options,
  options?: Options
): boolean {
  const [intersecting, setIntersecting] = useState(false)
  const observer = useRef<IntersectionObserver>()

  const cleanup = useCallback(() => {
    observer.current && observer.current.disconnect()
    observer.current = undefined
  }, [])

  const hasCallback = typeof callbackOrOptions === "function"
  const _options = hasCallback ? options : callbackOrOptions
  const _callback = hasCallback && callbackOrOptions

  useEffect(() => {
    const {
      disconnect,
      disconnectOnIntersection,
      ...intersectionObserverOptions
    } = _options || {}

    if (element.current && !disconnect) {
      observer.current = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
        if (_callback) _callback(entry)
        if (disconnectOnIntersection && entry.isIntersecting) cleanup()
      }, intersectionObserverOptions)

      observer.current.observe(element.current)
    }

    return cleanup
  }, [_callback, _options, cleanup, element])

  return intersecting
}
