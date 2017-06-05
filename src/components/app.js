import React, { Component } from 'react'

import RecipeCard from '../containers/recipe-card'
import '../style/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeCard />
      </div>
    )
  }
}

export default App
