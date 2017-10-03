import React from 'react'
import {
  Link
} from 'react-router-dom';

const App = () => (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/comments">Comment Box</Link></li>
      </ul>
    </div>
)

export default App
