import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
    <Hello name = {"iñaki"} age = {27}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
