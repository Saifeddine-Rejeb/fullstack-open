import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  return (
    <div>
      <Title text="statistics"/>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good + props.bad + props.neutral}</p>
      <p>average {(props.good-props.bad)/(props.good + props.bad + props.neutral)}</p>
      <p>positive {props.good/(props.good + props.bad + props.neutral)*100}%</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <Title text="give feedback"/>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App