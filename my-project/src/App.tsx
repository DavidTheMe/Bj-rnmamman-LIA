import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
  <div className="min-h-screen flex flex-col">
    <main className="grow flex flex-col items-center justify-center text-center">
      <h1>Vite + React</h1>
      <div className="card mt-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </main>

    <Footer role="contentinfo" aria-label="Sidfot" />
  </div>
)
}

export default App