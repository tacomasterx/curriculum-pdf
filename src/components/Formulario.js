// Formik es la biblioteca utilizada para implementar formularios.
import {Formik, Form, Field} from 'formik';
import {Button} from 'react-bootstrap';
// Componente creado para los campos de texto simple del formulario.
import Input from './Input';
// import TextArea from './TextArea';

const fileSelectHandler = (event) => {
  console.log(event.target.files[0]);
  return (event.target.files[0]);
}

function Formulario(props) {

  const validate = (values) => {
    const errors = {};

    if (!values.nombres) {
      errors.nombres = 'Campo obligatorio.';
    }

    // if (Object.keys(errors).length === 0) {
      props.setCampos(values);
    // }
    //
    return errors;
  }


  return (
    <>
      <Formik
        initialValues={{
          foto: {},
          nombres: '',
          apellidos: '',
          contacto: [],
          documentos: [],
          experiencia_laboral: [],
          formacion_academica: [],
        }}
        validate={validate}
        onSubmit={values => {
          console.log(values);
          props.setCampos(values);
        }}
      >
        {({setFieldValue}) => (
          <Form>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  let filename = fileSelectHandler(event);
                  setFieldValue("foto", URL.createObjectURL(filename));
                }}
              />
            </div>
            <div>
              <Input name="nombres" label="Nombres:" />
            </div>
            <div>
              <label htmlFor="apellidos">Apellidos:</label>
              <Field name="apellidos" />
            </div>
            <div>
              <label htmlFor="contacto">Contacto:</label>
              <Field name="contacto" />
            </div>
            <div>
              <label htmlFor="documentos">Documentos:</label>
              <Field name="documentos" />
            </div>
            <div>
              <label htmlFor="experiencia_laboral">Experiencia laboral:</label>
              <Field name="experiencia_laboral" />
            </div>
            <div>
              <label htmlFor="formacion_academica">Formaci??n acad??mica:</label>
              <Field name="formacion_academica" />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Formulario;
