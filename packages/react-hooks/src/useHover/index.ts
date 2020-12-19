import { useMemo, useState } from 'react';

type ReturnValue = [
  isHovered: boolean,
  bind: {
    onMouseOver: () => void;
    onMouseLeave: () => void;
  }
]

export const useHover = (): ReturnValue => {
  const [isHovered, setIsHovered] = useState(false);

  const bind = useMemo(() => {
    return {
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }
  }, [])

  return [isHovered, bind]

}

export default useHover
