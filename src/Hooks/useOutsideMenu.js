import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("pointerout", listener);
    return () => {
      document.removeEventListener("pointerout", listener);
    };
  }, [ref, handler]);
};
