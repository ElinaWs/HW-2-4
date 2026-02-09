import type { Student } from "../../Types/Types"
import styles from "./styles.module.css"

interface Props {
  student: Student
}

export const AddStudent = ({ student }: Props) => {
    const { name, age, grades, hobby } = student

    return (
      <div className={styles.container}>
        <p>NAME: {name}</p>
        <p>AGE: {age}</p>
        <p>GRADES: {grades.join(", ")}</p>
        {hobby && <p>HOBBY: {hobby}</p>}
      </div>
    )
};
