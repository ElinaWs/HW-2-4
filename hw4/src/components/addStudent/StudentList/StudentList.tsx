import type { Student } from "../../../Types/Types"
import { addStudent } from "../addStudent"

interface Props {
    students: Student[]
}

export const StudentList = ({ students }: Props) => {
    return(
        <div>
            {students.map((student) => (
                <addStudent student = {student}/>
            ))}
        </div>
    )
}