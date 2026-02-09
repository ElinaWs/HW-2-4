import type { Student } from "../../../Types/Types"
import { AddStudent } from "../AddStudent"
import styles from "./styles.module.css"

interface Props {
  students: Student[]
}

export const StudentList = ({ students }: Props) => {
  return (
    <div className={styles.container}>
      {students.map((student) => (
        <AddStudent key={student.id} student={student} />
      ))}
    </div>
  );
};
