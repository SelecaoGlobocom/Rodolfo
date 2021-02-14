import { useEffect, useReducer, useRef } from 'react'
import axios, { AxiosRequestConfig } from 'axios'


import { Action, Cache, State } from "./interface"

function useFetch<T = unknown>(
  date: Date,
  options?: AxiosRequestConfig,
): State {
  const cache = useRef<Cache>({})
  const cancelRequest = useRef<boolean>(false)
  const url = "http://localhost:3333/agenda/" + date.toISOString().split('T')[0]

  const initialState: State = {
    status: 'init',
    error: undefined,
    data: undefined,
    statusCode: 0,
  }

  // Keep state logic separated
  const fetchReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case 'request':
        return { ...initialState, status: 'fetching' }
      case 'success':
        return { ...initialState, status: 'fetched', data: action.payload, statusCode: action.statusCode }
      case 'failure':
        return { ...initialState, status: 'error', error: action.payload, statusCode: action.statusCode }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) {
      return
    }

    const fetchData = async () => {
      dispatch({ type: 'request' })

      if (cache.current[url]) {
        dispatch({ type: 'success', payload: cache.current[url], statusCode: 200 })
      } else {
        try {
          const response = await axios(url, options)
          cache.current[url] = response.data

          // if (cancelRequest.current) return

          dispatch({ type: 'success', payload: response.data, statusCode: response.status })
        } catch (error) {
          // if (cancelRequest.current) return 
          dispatch({ type: 'failure', payload: error.message, statusCode: 500 })
        }
      }
    }

    fetchData()

    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}

export default useFetch
