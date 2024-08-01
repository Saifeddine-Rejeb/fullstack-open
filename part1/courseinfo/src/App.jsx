const Header = (props) =>{
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) =>{
  return (
    <div>
      <p>
        {props.table[0].name} {props.table[0].exercises}
      </p>
      <p>
        {props.table[1].name} {props.table[1].exercises}
      </p>
      <p>
        {props.table[2].name} {props.table[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) =>{
  return (
    <p>Number of exercises {props.table[0].exercises + props.table[1].exercises  + props.table[2

    ].exercises }</p>
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