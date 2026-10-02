const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 Industry elective',
    parts: [
      {
        name: 'CSIT321 Application Development and emerging technologies',
        exercises: 3
      },
      {
        name: 'IT365 Data Analytics',
        exercises: 3
      },
      {
        name: 'IT317 Project Management',
        exercises: 3
      }
    ]
  }

  const student = {
    name: 'Sarah Bethany Daytia',   
    courseCode: 'CSIT340',
    section: 'G7'           
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name={student.name}
        courseCode={student.courseCode}
        section={student.section}
      />
    </div>
  )
}

export default App