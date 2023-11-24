import EmployeeDetailsForm from "../../components/EmployeeDetailsForm/EmployeeDetailsForm";
import Text from "../../components/Form/InputText/Text";
import Radio from "../../components/Form/Radio/Radio";
import Header from "../../components/Header/Header";
import styles from "./EmployeeInfo.module.scss";

const EmployeeInfo = () => {
  return (
    <>
      <Header title={"Employee Details"} />
      <EmployeeDetailsForm />
    </>
  );
};

export default EmployeeInfo;
