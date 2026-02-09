import { useState } from "react"
import { StudentList } from "./components/addStudent/StudentList/StudentList"
import type { Student } from './Types/Types'

function App() {

  const students:Student[] = [
    {
      id: 1010,
      name: 'Wladyis',
      age: 17,
      grades: [95, 100, 91],
      hobby: 'drums'
    },  {
      id: 2504,
      name: 'Frayzzy',
      age: 16,
      grades: [87, 92, 89],
      hobby: 'guitar'
    },  {
      id: 1901,
      name: 'Joise',
      age: 15,
      grades: [87, 97, 81],
      hobby: 'cobe'
    },  {
      id: 1507,
      name: 'StaXeR',
      age: 15,
      grades: [91, 96, 81],
      hobby: 'cs2'
    }, {
      id: 2206,
      name: 'MaxWell',
      age: 17,
      grades: [91, 86, 97],
      hobby: 'music'
    }, {
      id: 1409,
      name: 'HotDogWithSoap',
      age: 17,
      grades: [89, 96, 93],
      hobby: 'metal'
    }
  ]
  

  const [studentState, setStudentsState] = useState<Student[]>([])

  const addStudent = (studentArg:Student[]) => {
    const copyStudents = [...studentState]

    setStudentsState([...copyStudents, ...studentArg])
  }

return (
    <div>
      <h1>Students List:</h1>
      <StudentList students = {students}/>
      <button onClick={() => addStudent(students)}></button>
    </div>
  )
}

export default App