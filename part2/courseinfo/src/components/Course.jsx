const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => {
    return (
        <div>
        {course.parts.map(part =>
            <Part key={part.id} part={part} />
        )}
        </div>
    )
}


    
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

export default Course