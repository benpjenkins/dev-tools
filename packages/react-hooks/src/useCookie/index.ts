import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface Props {
  key: string
}



export const useCookie = ({key}: Props) => {
    const initialState = Cookies.get(key);
    const [cookie, setStateCookie] = useState(initialState || {})

    useEffect(() => {
      Cookies.set(key, cookie)
    }, [cookie])

    return [cookie, setStateCookie]
}

export default useCookie
