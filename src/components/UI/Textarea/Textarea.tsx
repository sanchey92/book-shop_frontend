import React, {FC} from "react";

const Textarea: FC = ({input, meta, ...props}: any) => {

  const hasError = meta.touched && meta.error
  const styles = ['form-control'];
  if (hasError) styles.push('error');

  return (
    <div className={'form-control'}>
      <textarea {...input} {...props}/>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export default Textarea;

