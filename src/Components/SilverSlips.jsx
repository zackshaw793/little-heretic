import { PDFViewer } from "@react-pdf/renderer";
import Container from 'react-bootstrap/Container';

const PDFDisplay = () => (   
    <Container className=" fluid d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <PDFViewer src='/assets/silverslips.pdf'
                style={{width: '100%', height: '80vh'}}/>
    </Container>

);

export default PDFDisplay;



