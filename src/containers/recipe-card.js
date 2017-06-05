import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Title Here</h1>
        <p>Here is where the recipe steps go</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    )
  }
}

export default connect(null)(RecipeCard)