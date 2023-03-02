import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    const [file, setFile] = useState("/c.pdf");
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <Layout title={"ASEGURAMIENTO DE LOS SERVICIOS DE APLICACIÓN EN LAS REDES PÚBLICAS"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>ASEGURAMIENTO DE LOS SERVICIOS DE APLICACIÓN EN LAS REDES PÚBLICAS</h2>
                <p>Garantizar la protección de los servicios de aplicación que se ejecutan en las redes públicas, asegurando la confidencialidad, integridad y disponibilidad de la información, y evitando el envío de información no permitida o involuntaria.</p>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>

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

                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.1.2%20Pol%C3%ADtica%20de%20Aseguramiento%20de%20los%20Servicios%20de%20Aplicaci%C3%B3n%20en%20las%20Redes%20P%C3%BAblicas.docx?d=w1d360277f84a489e8d6728aeb072c3c2&csf=1&web=1&e=waxtf9"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Aseguramiento de los Servicios de Aplicación en las Redes Públicas</Button>
                </a>

            </div>
        </Layout>
    )
}