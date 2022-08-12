import {Document, Page, Text, Image} from '@react-pdf/renderer';

const VistaPdf = ({campos}) => {
  const styles = {
    image:{
      maxWidth: "120px",
      maxHeight: "180px",
    }
  }

  return (
    <Document>
      <Page size="A4">
        <Image src={campos.foto} alt="" style={styles.image} />
        <Text>
          {campos.nombres != null ?
            campos.nombres :
            'No se han ingresado datos.'}
        </Text>
        <Text>{campos.apellidos != null ?
          campos.apellidos :
          'No se han ingresado datos.'}</Text>
        <Text>{campos.contacto != null ?
          campos.contacto :
          'No se han ingresado datos.'}</Text>
        <Text>{campos.documentos != null ?
          campos.documentos :
          'No se han ingresado datos.'}</Text>
        <Text>{campos.experiencia_laboral != null ?
          campos.experiencia_laboral :
          'No se han ingresado datos.'}</Text>
        <Text>{campos.formacion_academica != null ?
          campos.formacion_academica :
          'No se han ingresado datos.'}</Text>
      </Page>
    </Document>
  );
}

export default VistaPdf;

