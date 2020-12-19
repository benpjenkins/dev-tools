import { useEffect } from "react";

export const useEvent = (type: string, handler: () => any): void => {
  useEffect(() => {
    window.addEventListener(type, handler);
    return () => {
      window.removeEventListener(type, handler);
    };
  });
};

export default useEvent
