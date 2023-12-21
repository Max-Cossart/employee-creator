import Text from "../Form/InputText/Text";
import Radio from "../Form/Radio/Radio";
import Select from "../Form/Select/Select";
import styles from "./EmployeeDetailsForm.module.scss";
import months from "../../data/months.json";
import { NavLink } from "react-router-dom";

interface props {
  formSubmit: (data: any) => unknown;
  register: any;
  handleSubmit: (formSubmit: any) => any;
  errors: any;
}

function EmployeeDetailsForm({
  formSubmit,
  register,
  handleSubmit,
  errors,
}: props) {
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className={styles.container}>
          <h3 className={styles.title}>Personal Information</h3>
          <Text name="firstName" label="First Name" register={register} />
          <Text
            name="middleName"
            label="Middle Name (if applicable)"
            register={register}
          />
          <Text name="lastName" label="Last Name" register={register} />
        </div>
        <div className={styles.container}>
          <h3 className={styles.title}>Contact Details</h3>
          <Text name="email" label="Email Address" register={register} />
          <Text name="mobile" label="Mobile Number" register={register} />
          <Text
            name="address"
            label="Residential Address"
            register={register}
          />
        </div>
        <div className={styles.container}>
          <h3 className={styles.title}>Employee Status</h3>
          <div>
            <h4 className={styles.sub_title}>What is the contract type?</h4>
            <Radio name="permanent" label="Permanent" checked={false} />
            <Radio name="contract" label="Contract" checked={true} />
          </div>
          <div className={`${styles.container} ${styles.date_container}`}>
            <h4 className={styles.sub_title}>Start Date</h4>
            <div className={styles.date}>
              <Text name="startDay" label="Day" register={register} />
              <Select
                name="month"
                label="Month"
                values={months}
                register={register}
              />
              <Text name="startYear" label="Year" register={register} />
            </div>
          </div>
          <div className={`${styles.container} ${styles.date_container}`}>
            <h4 className={styles.sub_title}>Finish Date</h4>
            <div className={styles.date}>
              <Text name="finishDay" label="Day" register={register} />
              <Select
                name="month"
                label="Month"
                values={months}
                register={register}
              />
              <Text name="finishYear" label="Year" register={register} />
            </div>

            <Radio name="onGoing" label="On Going" checked={false} />
          </div>
          <div className={styles.container}>
            <h4 className={styles.sub_title}>
              Is this on a full-time or part-time basis?
            </h4>

            <Radio name="fullTime" label="Full-Time" checked={false} />
            <Radio name="partTime" label="Part-Time" checked={true} />
            <br />
            <Text
              name="hoursPerWeek"
              label="Hours Per Week"
              register={register}
            />
          </div>
        </div>
        <div>
          <button type="submit" className={`${styles.btn} ${styles.save_btn}`}>
            Save
          </button>
          <NavLink to={"/"}>
            <button className={`${styles.btn}`}>Cancel</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default EmployeeDetailsForm;
