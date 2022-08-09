import {useState} from 'react';
import {Button} from 'react-bootstrap';
import {PDFViewer, PDFDownloadLink} from '@react-pdf/renderer';
// Componente definido para almacenar el formulario
import Formulario from './components/Formulario';
// Componente definido para almacenar la previsualización web
import VistaWeb from './components/VistaWeb'
// Componente definido para almacenar la previsualización PDF
import VistaPdf from './components/VistaPdf'
import './App.css';

function App() {
  // Variable que almacena los registros agregados al formulario
  const [campos, setCampos] = useState({});
  // Variables bandera para alternar entre vistas
  const [verWeb, setVerWeb] = useState(false);
  const [verPdf, setVerPdf] = useState(false);

  return (
    <div className="App">
      <div className="App-container">
        <div className="Form-container">
          <Formulario setCampos={setCampos}></Formulario>
        </div>
        <div className="View-container">
          <div className="View">
            {verWeb ? <VistaWeb campos={campos} /> : null}
            {verPdf ?
              <PDFViewer style={{width: "100%", height: "90vh"}}>
                <VistaPdf campos={campos} />
              </PDFViewer> : null}
          </div>
          <Button onClick={() => {
            setVerWeb(!verWeb);
            setVerPdf(false);
          }}>{verWeb ? 'Ocultar web' : 'Ver web'}</Button>
          <Button onClick={() => {
            setVerPdf(!verPdf);
            setVerWeb(false);
          }}>{verPdf ? 'Ocultar Pdf' : 'Ver Pdf'}</Button>
          <PDFDownloadLink document={<VistaPdf campos={campos} />} fileName={`Curriculum_Vitae - ${campos.campo}.pdf`}><Button>Descarga</Button></PDFDownloadLink>
        </div>
      </div>
    </div >
  );
}

export default App;
