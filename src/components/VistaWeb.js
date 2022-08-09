const VistaWeb = ({campos}) => {
  return (
    <div>
      <p>{campos.campo != null ?
        campos.campo :
        'No se han ingresado datos.'}</p>
    </div>
  );
}

export default VistaWeb;
