import {Document, Page, Text} from '@react-pdf/renderer';

const VistaPdf = ({campos}) => {
  return (
    <Document>
      <Page size="A4">
        <Text>
          {campos.campo != null ?
            campos.campo :
            'No se han ingresado datos.'}
        </Text>
      </Page>
    </Document>
  );
}

export default VistaPdf;

