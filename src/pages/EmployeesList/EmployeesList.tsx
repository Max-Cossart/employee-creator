import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Header from "../../components/Header/Header";
import NewEmployee from "../../components/NewEmployee/NewEmployee";
import styles from "./EmployeesList.module.scss";
import { getEmployees } from "../../services/employee-services";
import { useEffect, useState } from "react";

export interface CardDetails {
  firstName: string;
  lastName: string;
  startDate: Date;
  email: string;
  id: number;
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState([] as CardDetails[]);

  useEffect(() => {
    getEmployees().then((res) => {
      setEmployees(res);
    });
    console.log(employees);
  }, []);

  return (
    <>
      <Header title={"Employee's List"} />
      <NewEmployee />
      <div className={styles.wrapper}>
        {employees.map((item) => (
          <EmployeeCard
            firstName={item.firstName}
            lastName={item.lastName}
            startDate={item.startDate}
            email={item.email}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};

export default EmployeeList;
