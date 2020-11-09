import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(key, defaultVal, reducer) {

  //get piece of state based on value in localStorage (or default)
  const [ state, dispatch ] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    }
    catch(e){
      val = defaultVal
    }
    return val
  })

  //update local storage of any change in state
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, dispatch]
}