const VistaWeb = ({campos}) => {
  return (
    <div>
      <img src="" />
      <p>{campos.nombres != null ?
        campos.nombres :
        'No se han ingresado datos.'}</p>
      <p>{campos.apellidos != null ?
        campos.apellidos :
        'No se han ingresado datos.'}</p>
      <p>{campos.contacto != null ?
        campos.contacto :
        'No se han ingresado datos.'}</p>
      <p>{campos.documentos != null ?
        campos.documentos :
        'No se han ingresado datos.'}</p>
      <p>{campos.experiencia_laboral != null ?
        campos.experiencia_laboral :
        'No se han ingresado datos.'}</p>
      <p>{campos.formacion_academica != null ?
        campos.formacion_academica :
        'No se han ingresado datos.'}</p>
    </div>
  );
}

export default VistaWeb;
