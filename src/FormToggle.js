import React from 'react';
import styles from './FormToggle.module.css';
import { joinClass, randomId } from './utility';

export default ({
  id,
  name,
  type,
  className,
  value,
  title,
}) => {
  let uname = id || randomId(name);
  return (
    <>
      <input
        value={value}
        type={type||'checkbox'}
        id={uname}
        name={name}
        className={styles.input}
      />
      <label
        className={joinClass(styles.label, className)}
        htmlFor={uname}
      >
        <span className="visuallyhidden">{title||' '}</span>
      </label>
    </>
  );
};
