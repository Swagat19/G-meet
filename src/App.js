import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import './App.scss'
import HomePage from './components/HomePage/HomePage'
import CallPage from './components/CallPage/CallPage'
import NoMatch from './components/NoMatch/NoMatch'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/:id' element={<CallPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NoMatch />} />
      </Switch>
    </Router>
  )
}

export default App
