import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import styles from "./EmployeesList.module.scss";

const EmployeeList = () => {
  return (
    <>
      <Header title={"Employee's List"} />
      <div className={styles.wrapper}>
        <EmployeeCard />
      </div>
    </>
  );
};

export default EmployeeList;
