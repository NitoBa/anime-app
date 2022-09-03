import { useRef } from "react";

export function useDebounce(fn: Function, delay: number = 500) {
  const timeoutRef = useRef(null);
  function debounceFunction(...args: any) {
    if (!timeoutRef.current) return;
    clearTimeout(timeoutRef.current);
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceFunction;
}
