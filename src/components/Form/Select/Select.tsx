import styles from "./Select.module.scss";
import monthValues from "../../../data/months-value.json";

interface SelectProps {
  name: string;
  label: string;
  values: string[];
  register: any;
}

const Select = ({ name, label, values, register }: SelectProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select {...register(name)} className={styles.select}>
        {values.map((value, monthValues) => (
          <option value={monthValues} key={monthValues}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
