import styles from "./Radio.module.scss";

interface Props {
  name: string;
  label: string;
}

const Radio = ({ name, label }: Props) => {
  return (
    <div className={styles.container}>
      <input type="radio" className={styles.radio} />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
