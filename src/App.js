import './App.css'
import { Route, Routes } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/:id" component={UserPage} />
    </Routes>
  )
}
