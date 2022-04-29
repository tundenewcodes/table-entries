import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Tables from './components/Tables'
const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
