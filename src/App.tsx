import React from 'react'
import { Content } from '@/presentation/pages'
import { useAppDispatch, useAppSelector } from '@/presentation/state/hooks'
import { incremented } from '@/presentation/state/features/counter/counter-slice'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(incremented())
  }

  return (
    <Content>
      <main>
        <h1>Counter</h1>
        <p>count is {count}</p>
        <button onClick={handleClick}>+</button>
      </main>
    </Content>
  )
}

export default App
