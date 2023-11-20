import Header from "../../components/Header/Header";
import * as yup from "yup";

const EmployeeInfo = () => {
  const schema = yup.object({
    firstName: yup.string().required("First name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    lastName: yup.string().required("First name is required"),
  });
  return (
    <>
      <Header title={"Employee Details"} />
      <h3>Personal Information</h3>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name (if applicable)</label>
          <input type="text" id="middleName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </form>
      <h3>Contact Details</h3>
      <form>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" />
        </div>
        <div>
          <label htmlFor="address">Residential Address</label>
          <input type="text" id="address" />
        </div>
      </form>
    </>
  );
};

export default EmployeeInfo;
