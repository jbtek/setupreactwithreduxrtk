import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { RootState } from '../../store/store'

/**
 * 
 *Summary of React-Redux Hooks:
  useSelector: Access Redux state in a component.
  useDispatch: Dispatch Redux actions.
  useStore: Get direct access to the Redux store (rarely needed).
  useReduxContext: Get access to the Redux context (rarely needed).
 */

export const Counter:React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  console.log('HHIII counter rendering::')
  return (
    <div>
      <div>
        <button
          aria-babel="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}