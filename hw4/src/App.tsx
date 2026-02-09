import { useState } from "react"
import { StudentList } from "./components/AddStudent/StudentList/StudentList"
import type { Student } from "./Types/Types"
import styles from "./styles.module.css"

function App() {
  const students: Student[] = [
    {
      id: 1,
      name: "Wladyis",
      age: 17,
      grades: [95, 100, 91],
      hobby: "drums"
    }, {
      id: 2,
      name: "Frayzzy",
      age: 16,
      grades: [87, 92, 89],
      hobby: "guitar"
    }, {
      id: 3,
      name: "Joise",
      age: 15,
      grades: [87, 97, 81],
      hobby: "cobe"
    }, {
      id: 4,
      name: "StaXeR",
      age: 15,
      grades: [91, 96, 81],
      hobby: "cs2"
    }, {
      id: 5,
      name: "MaxWell",
      age: 17,
      grades: [91, 86, 97],
      hobby: "music"
    }, {
      id: 6,
      name: "HotDogWithSoap",
      age: 17,
      grades: [89, 96, 93],
      hobby: "metal"
    },
  ];

  const [studentState, setStudentState] = useState<Student[]>(students);

  const addStudent = (newStudent: Student) => {
    const studentAlreadyExists = studentState.some(
      (student) => student.id === newStudent.id
    )

    if (studentAlreadyExists) {
      console.log("This id is already added")
      return
    }

    const updatedStudents = [...studentState, newStudent]
    setStudentState(updatedStudents)
  };

  const findTopStudent = (studentsList: Student[]) => {
    let topStudent = studentsList[0]

    studentsList.forEach((currentStudent) => {
      const currentStudentAverageGrade =
        currentStudent.grades.reduce(
          (total, grade) => total + grade,
          0
        ) / currentStudent.grades.length

      const topStudentAverageGrade =
        topStudent.grades.reduce(
          (total, grade) => total + grade,
          0
        ) / topStudent.grades.length

      if (currentStudentAverageGrade > topStudentAverageGrade) {
        topStudent = currentStudent
      }
    });

    console.log("Top Students:", topStudent)
    return topStudent
  };

  const updateStudentHobby = (studentId: number, newHobby: string) => {
    const foundStudent = studentState.find(
      (student) => student.id === studentId
    );

    if (!foundStudent) {
      console.log("Student is not definded")
      return;
    }

    const updatedStudents = studentState.map((student) =>
      student.id === studentId
        ? { ...student, hobby: newHobby }
        : student
    );

    setStudentState(updatedStudents)
  };

  return (
    <div>
      <h1>Students List:</h1>

      <StudentList students={studentState} />

      <button className='buttons'
        onClick={() =>
          addStudent({
            id: 7,
            name: "SilvaKun",
            age: 18,
            grades: [93, 96, 100],
            hobby: "japanese",
          })
        }
      >
        Add student
      </button>

      <button className='buttons' onClick={() => findTopStudent(studentState)}>
        Find top student
      </button>

      <button className='buttons' onClick={() => updateStudentHobby(3, "cs2")}>
        Update Joise hobby
      </button>
    </div>
  );
};

export default App
