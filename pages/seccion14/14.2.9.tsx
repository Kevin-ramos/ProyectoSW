import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import {useState} from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    const [file, setFile] = useState("/j.pdf");
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <Layout title={"PRUEBAS DE ACEPTACIÓN DEL SISTEMA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>PRUEBAS DE ACEPTACIÓN DEL SISTEMA</h2>
                <p>El proceso de incorporación de nuevas aplicaciones actualizaciones o nuevas versiones de software debe estar sujeto a un proceso de aceptación donde se le realicen las pruebas funcionales y de seguridad planificadas con el fin de garantizar la calidad y fiabilidad.</p>
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
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.9%20Pol%C3%ADtica%20de%20Pruebas%20de%20Aceptaci%C3%B3n%20del%20Sistema.docx?d=wc18605a578454d548b20201c842d49a4&csf=1&web=1&e=rfF07T"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Pruebas de Aceptación del Sistema</Button>
                </a>
            </div>
        </Layout>
    )
}