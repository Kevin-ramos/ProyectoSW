import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

import {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    const [file, setFile] = useState("/e.pdf");
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <Layout title={"PROCEDIMIENTO DE CONTROL DE CAMBIO DEL SISTEMA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>PROCEDIMIENTO DE CONTROL DE CAMBIO DEL SISTEMA</h2>
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

                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.2%20Pol%C3%ADtica%20de%20Gesti%C3%B3n%20de%20Cambios.docx?d=wa44bd140835d4d27a7eaf24ace2f2f8d&csf=1&web=1&e=l55fwA"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Gestión de Cambios</Button>
                </a>
            </div>
        </Layout>
    )
}