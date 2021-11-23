import { useCallback, useState } from "react";

export function useToggle(initalState = false): [boolean, any] {
  const [state, setState] = useState<boolean>(initalState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
}
