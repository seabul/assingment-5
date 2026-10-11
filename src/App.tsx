import { Suspense } from 'react'
import Nav from './Nav.tsx'
import Body from './body.tsx'
import Title from './Title.tsx'
import Langues from './Langues.tsx'
import './App.css'
import type { Language } from './type'

const languagesFetch = async (): Promise<Language[]> => {
  const response = await fetch('/data.json')
  const data = await response.json()
  return data
}

function App() {
  const languagesPromise = languagesFetch()

  return (
    <>
      <Nav />
      <Body />
      <Title />

      <Suspense fallback={<div className="loading-state">Loading...</div>}>
        <Langues languagesPromise={languagesPromise} />
      </Suspense>
    </>
  )
}

export default App
