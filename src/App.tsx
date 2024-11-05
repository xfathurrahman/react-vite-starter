import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-neutral-800'>
      <h1 className='text-3xl font-bold text-white'>{count}</h1>
      <div className='mt-5 flex items-center justify-center space-x-2'>
        {['Decrease', 'Increase'].map((action) => (
          <div
            key={action}
            className='rounded-lg bg-white p-2'
          >
            <button
              onClick={() =>
                setCount((count) =>
                  action === 'Decrease' ? count - 1 : count + 1
                )
              }
              disabled={
                (action === 'Decrease' && count <= 0) ||
                (action === 'Increase' && count >= 10)
              }
            >
              {action}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App
