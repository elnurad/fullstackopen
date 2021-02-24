import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  
  return(
    <button onClick={props.actionOnClick}>{props.text}</button>
  )
}

const Title = (props) =>{
  return(
    <h3>{props.title}</h3>
  )
}

const Points = (props) => {
  return(
    <p>has {props.points} votes</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomGenerator = () => {
    const randomNumber = Math.floor(Math.random()*anecdotes.length)
    setSelected(randomNumber)
  }
  
  
  const vote = () =>{
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)    
  }

  return (
    <div>
      <Title title={"Anecdote of the day:"}/>
      {props.anecdotes[selected]}
      <Points points={votes[selected]}/>
      <div>
        <Button actionOnClick={vote} text={"vote"} />
        <Button actionOnClick={randomGenerator} text={"next anecdote"} />
      <Title title={"Anecdote with most votes:"} />
      {props.anecdotes[votes.indexOf(Math.max(...votes))]}
      <Points points={Math.max(...votes)}/>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)