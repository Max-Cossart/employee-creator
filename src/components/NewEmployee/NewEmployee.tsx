import { NavLink } from "react-router-dom";
import styles from "./NewEmployee.module.scss";

const NewEmployee = () => {
  const addEmployee = () => {
    console.log("Add Employee");
  };

  return (
    <div className={styles.container}>
      <p className={styles.para}>
        Click Edit to see more details about each employee
      </p>
      <span className={styles.divider}>|</span>
      <NavLink className={styles.btn}>Add Employee</NavLink>
    </div>
  );
};

export default NewEmployee;
