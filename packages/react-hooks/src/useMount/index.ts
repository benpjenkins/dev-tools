import { useEffect } from 'react';

export const useMount = (func: () => any): void => {

    useEffect(() => {
      func()
    }, [])

}

export default useMount
