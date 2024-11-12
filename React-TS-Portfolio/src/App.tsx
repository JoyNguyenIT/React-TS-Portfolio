import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoList from './components/todoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello World</div>
      <TodoList />
    </>
  )
}

export default App
