import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import styles from "./EmployeesList.module.scss";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <Header title={"Employee's List"} />
      <div className={styles.wrapper}>
        <NavLink to={"/thing"} style={{ textDecoration: "none" }}>
          <EmployeeCard />
        </NavLink>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </>
  );
};

export default EmployeeList;
