import { useState } from 'react';



export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isToggled, setIsToggled] = useState(initialState)

  const toggle = () => setIsToggled(prevState => !prevState)
  return [isToggled, toggle];
}

export default useToggle
