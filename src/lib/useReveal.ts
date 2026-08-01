import { useEffect, useRef, useState } from 'react'

/**
 * Toggles a "visible" flag once the element scrolls into view, for a subtle
 * one-shot entrance animation. Defaults to visible immediately if
 * IntersectionObserver isn't available, so content is never gated on JS.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      // threshold 0 (any overlap counts): a ratio-based threshold breaks for
      // elements much taller than the viewport, since intersecting-area /
      // target-area can never reach a meaningful percentage.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, className: `reveal ${visible ? 'is-visible' : ''}` }
}
