import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import styles from "./EmployeeCard.module.scss";
import { NavLink } from "react-router-dom";

const EmployeeCard = () => {
  const employee = {
    name: "John Smith",
    contractLength: 5,
    email: "john.smith@email.com",
  };

  const removeEmployee = () => {
    console.log("delete");
  };

  const editEmployee = () => {
    console.log("edit");
  };

  return (
    <section className={styles.card}>
      <div className={styles.info}>
        <NavLink to={"/thing"}>
          <h3 className={styles.info__name}>{employee.name}</h3>
        </NavLink>
        <p className={styles.info__contract}>
          Contract - {employee.contractLength}yrs
        </p>
        <p>{employee.email}</p>
      </div>
      <div className={styles.btns}>
        <button
          onClick={editEmployee}
          className={`${styles.btns__edit} ${styles.btn}`}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <p className={`${styles.edit__hover} ${styles.hover__effect}`}>Edit</p>
        <span className={styles.split}>|</span>
        <button
          onClick={removeEmployee}
          className={`${styles.btns__remove} ${styles.btn}`}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <p className={`${styles.remove__hover} ${styles.hover__effect}`}>
          Remove
        </p>
      </div>
    </section>
  );
};

export default EmployeeCard;
