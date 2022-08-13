import {useField} from 'formik';

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={field.name}>{label}</label>
      <input type="text" {...field} />
      {
        meta.touched && meta.error ?
          <div className="">{meta.error}</div> :
          null
      }
    </>
  );
}

export default Input;
