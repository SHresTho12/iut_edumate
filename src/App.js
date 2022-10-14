import React from 'react'
import AppRouter from './components/AppRouter'
import AuthContextProvider from './Context/AuthContext'

function App() {
  
  
  return (
    <AuthContextProvider><AppRouter /></AuthContextProvider>
  )
  
}

export default App
