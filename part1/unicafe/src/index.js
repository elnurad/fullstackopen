import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = props => <div>{props.text}</div>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Display = props => <div>{props.feedbackName} {props.total}</div>

const Statistics = props => <div>{props.statisticsName} {props.statisticsValue}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad)
  const positives = (good / (good + neutral + bad)) * 100
  return (
    <div>
      <Title text="Give Feedback" />
      <Button text="good" handleClick={()=>setGood(good + 1)}/>
      <Button text="neutral" handleClick={()=>setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={()=>setBad(bad + 1)} />
      <Title text="Statistics" />
      <Display feedbackName="good" total={good}/>
      <Display feedbackName="neutral" total={neutral}/>
      <Display feedbackName="bad" total={bad}/>
      <Statistics statisticsName="All" statisticsValue={all}/>
      <Statistics statisticsName="Average" statisticsValue={average} />
      <Statistics statisticsName="Positive" statisticsValue={positives + "%"}  />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)