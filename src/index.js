import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

render(
  <BrowserRouter>
    <App />
    <HomePage/>
    <UserPage/>
  </BrowserRouter>,
  document.querySelector('#root')
)
