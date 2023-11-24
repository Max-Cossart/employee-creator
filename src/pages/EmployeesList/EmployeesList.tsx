import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import NewEmployee from "../../components/NewEmployee/NewEmployee";
import styles from "./EmployeesList.module.scss";

const EmployeeList = () => {
  return (
    <>
      <Header title={"Employee's List"} />
      <NewEmployee />
      <div className={styles.wrapper}>
        <EmployeeCard />
      </div>
    </>
  );
};

export default EmployeeList;
