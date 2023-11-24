import { User } from "../../App";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import styles from "./EmployeesList.module.scss";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <Header title={"Employee's List"} />
      <div className={styles.wrapper}>
        <NavLink to={"/thing"}>
          <EmployeeCard />
        </NavLink>
      </div>
    </>
  );
};

export default EmployeeList;
