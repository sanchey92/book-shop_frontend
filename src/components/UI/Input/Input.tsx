import React, {FC} from "react";

const Input: FC = ({input, meta, ...props}: any) => {

  const hasError = meta.touched && meta.error
  const styles = ['form-control'];
  if (hasError) styles.push('error');

  return (
    <div className={styles.join(' ')}>
      <input {...input} {...props}/>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
};

export default Input;
