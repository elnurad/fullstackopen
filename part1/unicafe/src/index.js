import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = props => <div>{props.text}</div>

const Buttons = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = props => <tr><td>{props.statisticName}</td><td>{props.statisticsValue}</td></tr>


const Statistics = (props) => {
  const {good, neutral, bad} = props
  const all = good + neutral + bad
  const average = (good - bad) / (good + neutral + bad)
  const positives = (good / (good + neutral + bad)) * 100

  return(
   <div>
      <table>
        <tbody>
        
      <Statistic statisticName="good" statisticsValue={ good < 1 ? null : good } />
        
        
      <Statistic statisticName="neutral" statisticsValue={ neutral < 1 ? null : neutral }/>
      
      
      <Statistic statisticName="bad" statisticsValue={ bad < 1 ? null : bad } />
      
      
      <Statistic statisticName="All" statisticsValue={all} />
      
      
      <Statistic statisticName="Average" statisticsValue={average} />
      
      
      <Statistic statisticName="Positive" statisticsValue={positives} />
      
        </tbody>
      </table>
      </div>
    
  )
}


const Button = (props) => {
  const {good, neutral, bad} = props
  return(
    <div>
      <Buttons text="good" handleClick={()=>props.setGood(good + 1)}/>
      <Buttons text="neutral" handleClick={()=>props.setNeutral(neutral + 1)} />
      <Buttons text="bad" handleClick={()=>props.setBad(bad + 1)} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const placeholder = "No Feedback Given"
  return (
    <div>
      <Title text="Give Feedback" />
      <Button good={good} bad={bad} neutral={neutral} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      
      <Title text="Statistics" />
        { good + bad +neutral < 1 ? <h1>{placeholder}</h1> : <Statistics good={good} neutral={neutral} bad={bad} />
      }
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)