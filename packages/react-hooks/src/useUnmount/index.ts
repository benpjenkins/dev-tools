import { useEffect } from 'react';

export const useUnmount = (func: () => any): void => {
  useEffect(() => {
    return () => {
      func()
    }
  })
}

export default useUnmount
