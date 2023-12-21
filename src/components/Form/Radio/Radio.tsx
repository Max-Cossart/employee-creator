import { useEffect, useState } from "react";
import styles from "./Radio.module.scss";

interface Props {
  name: string;
  label: string;
  checked: boolean;
}

const Radio = ({ name, label, checked }: Props) => {
  const [changeCheck, setChangeCheck] = useState(false);

  useEffect(() => {
    setChangeCheck(checked);
  }, []);

  return (
    <div className={styles.container}>
      <input
        onClick={() => setChangeCheck(!changeCheck)}
        type="radio"
        value={name}
        className={styles.radio}
        checked={changeCheck}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
