import React from 'react';
import styles from './FormToggle.module.css';

export default ({
  id,
  name,
  type,
  className,
  value,
  title,
  ...props
}) => {
  let uname = id || ((name || '_') + Math.random().toString(36).substr(2));
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
        className={styles.label}
        htmlFor={uname}
      >
        <span className="visuallyhidden">{title||' '}</span>
      </label>
    </>
  );
};
