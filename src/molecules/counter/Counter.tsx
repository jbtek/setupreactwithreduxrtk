import { decrement, increment } from './counterSlice'
import { RootState } from '../../store/store'
import { useAppDispatch, useAppSelector } from '../../custom-hooks/useReduxHooks'

/**
 * 
 *Summary of React-Redux Hooks:
  useSelector: Access Redux state in a component.
  useDispatch: Dispatch Redux actions.
  useStore: Get direct access to the Redux store (rarely needed).
  useReduxContext: Get access to the Redux context (rarely needed).
 */

const Counter:React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()
  console.log('HHIII counter rendering::')
  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter