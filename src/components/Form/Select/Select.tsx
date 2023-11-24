import styles from "./Select.module.scss";

interface Props {
  name: string;
  label: string;
  values: string[];
}

const Select = ({ name, label, values }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select name="" id="" className={styles.select}>
        {values.map((value) => (
          <option value="">{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
