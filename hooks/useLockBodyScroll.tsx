import { useEffect } from "react";

function getScrollbarWidth() {
  const outside = document.createElement("div");
  const inside = document.createElement("div");

  outside.style.width = inside.style.width = "100%";
  outside.style.overflow = "scroll";

  document.body.appendChild(outside).appendChild(inside);
  const scrollbar = outside.offsetWidth - inside.offsetWidth;
  if (outside.parentNode) outside.parentNode.removeChild(outside);
  return scrollbar;
}

/**
 * # Warning!
 * In some environments scrollbars have width (i.e. Windows, macOS when using mouses with scrollwheel…).
 * Removing the scrollbar on these environments will shift the layout.
 * When scroll is locked, a CSS variable named `--scrollbar-width` will be set with the width of the scrollbar.
 * Use it to offset the layout shift with the class `.pr-scrollbar-width`.
 *
 * [You can force the scrollbar on macOS](https://www.google.com/search?q=show+scrollbar+macos) to test this.
 */
export default function useLockBodyScroll(lock: boolean): void {
  useEffect(() => {
    const body = document.querySelector("body");

    if (!body) return;

    body.style.overflow = lock ? "hidden" : "auto";
    body.style.setProperty(
      "--scrollbar-width",
      lock ? `${getScrollbarWidth()}px` : "0px"
    );
  }, [lock]);
}
