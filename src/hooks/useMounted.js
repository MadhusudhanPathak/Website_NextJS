import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Reports whether the component is rendering on the client after hydration.
 * Returns false during SSR and the hydration pass, so client-only output
 * (theme-dependent UI, `window` reads) can't cause a hydration mismatch.
 * @returns {boolean}
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
