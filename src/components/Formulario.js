import {Formik, Form, Field} from 'formik';
import {Button} from 'react-bootstrap';

function Formulario(props) {
  return (
    <>
      <Formik
        initialValues={{
          campo: '',
        }}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
          props.setCampos(values);
        }}
      >
        <Form>
          <label htmlFor="campo">Campo:</label>
          <Field name="campo" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </>
  );
}

export default Formulario;
