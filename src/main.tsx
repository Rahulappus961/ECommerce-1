import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>,
  document.getElementById("root")
)
