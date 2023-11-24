import styles from "./Text.module.scss";

interface Props {
  name: string;
  label: string;
}

const Text = ({ name, label }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        className={`${
          name === "email" || name === "address"
            ? styles.large
            : name === "startDay" ||
              name === "startYear" ||
              name === "finishDay" ||
              name === "finishYear" ||
              name === "hoursPerWeek"
            ? styles.small
            : styles.input
        } 
        ${styles.basic_input}`}
      />
    </div>
  );
};

export default Text;
