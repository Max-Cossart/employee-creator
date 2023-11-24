import Text from "../Form/InputText/Text";
import Radio from "../Form/Radio/Radio";
import Select from "../Form/Select/Select";
import styles from "./EmployeeDetailsForm.module.scss";
import months from "../../data/months.json";

function EmployeeDetailsForm() {
  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.container}>
          <h3 className={styles.title}>Personal Information</h3>
          <Text name="firstName" label="First Name" />
          <Text name="middleName" label="Middle Name (if applicable)" />
          <Text name="lastName" label="Last Name" />
        </div>
        <div className={styles.container}>
          <h3 className={styles.title}>Contact Details</h3>
          <Text name="email" label="Email Address" />
          <Text name="mobile" label="Mobile Number" />
          <Text name="address" label="Residential Address" />
        </div>
        <div className={styles.container}>
          <h3 className={styles.title}>Employee Status</h3>
          <div>
            <h4 className={styles.sub_title}>What is the contract type?</h4>
            <Radio name="permanent" label="Permanent" />
            <Radio name="contract" label="Contract" />
          </div>
          <div className={`${styles.container} ${styles.date_container}`}>
            <h4 className={styles.sub_title}>Start Date</h4>
            <div className={styles.date}>
              <Text name="startDay" label="Day" />
              <Select name="month" label="Month" values={months} />
              <Text name="startYear" label="Year" />
            </div>
          </div>
          <div className={`${styles.container} ${styles.date_container}`}>
            <h4 className={styles.sub_title}>Finish Date</h4>
            <div className={styles.date}>
              <Text name="finishDay" label="Day" />
              <Select name="month" label="Month" values={months} />
              <Text name="finishYear" label="Year" />
            </div>
            <Radio name="onGoing" label="On Going" />
          </div>
          <div className={styles.container}>
            <h4 className={styles.sub_title}>
              Is this on a full-time or part-time basis?
            </h4>
            <Radio name="fullTime" label="Full-Time" />
            <Radio name="partTime" label="Part-Time" />
            <br />
            <Text name="hoursPerWeek" label="Hours Per Week" />
          </div>
        </div>
        <div>
          <button className={`${styles.btn} ${styles.save_btn}`}>Save</button>
          <button className={`${styles.btn}`}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeDetailsForm;
