const Header = (props) =>{
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) =>{
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}
const Content = (props) =>{
  return (
    <div>
      <Part name={props.table[0].name} exercises={props.table[0].exercises} />
      <Part name={props.table[1].name} exercises={props.table[1].exercises} />
      <Part name={props.table[2].name} exercises={props.table[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  return (
    <p>Number of exercises {props.table[0].exercises + props.table[1].exercises  
      + props.table[2].exercises }</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content table={parts} />
      <Total table={parts} />
    </div>
  )
}

export default App