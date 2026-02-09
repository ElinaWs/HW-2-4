import type { Student } from "../../Types/Types"

interface Props {
    student: Student
}

export const addStudent = ({ student }: Props) => {
    const { id, name, age, grades, hobby } = student
    return(
        <div>
            <p>ID: {id}</p>
            <p>NAME: {name}</p>
            <p>AGE: {age}</p>
            <p>GRADES: {grades}</p>
            {hobby && <p>HOBBY: {hobby}</p>}
        </div>
    )
}