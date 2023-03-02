import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    const [file, setFile] = useState("/d.pdf");
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <Layout title={"TRANSACCIONES EN LÍNEA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>TRANSACCIONES EN LÍNEA</h2>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center", margin:"auto"}}>
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from({ length: numPages }, (_, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                            />
                        ))}
                    </Document>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.1.3%20Pol%C3%ADtica%20de%20Transacciones%20en%20L%C3%ADnea.docx?d=wa191245a1e10415382bfe6c58a6aadcf&csf=1&web=1&e=DKydDF"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Transacciones en Línea</Button>
                </a>
            </div>
        </Layout>
    )
}