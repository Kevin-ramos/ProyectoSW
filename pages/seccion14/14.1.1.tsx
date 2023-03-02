import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {useState} from "react";
import {Button} from "react-bootstrap";




export default function () {
    const titulo ="ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD"
    const [file, setFile] = useState("/b.pdf");
    const [numPages, setNumPages] = useState(null);
    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }
    return (
        <>
            <Layout title={titulo}>

                <div style={{ backgroundColor: "white", textAlign:"center"}}>
                    <h2>ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD</h2>
                    <div>
                        <div className="container">
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
                        <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.1.1%20Pol%C3%ADtica%20de%20An%C3%A1lisis%20y%20Especificaci%C3%B3n%20de%20los%20Requisitos%20de%20Seguridad.docx?d=wfcde79a6e3d6431d9681f6a06eab37f8&csf=1&web=1&e=QqmubA"}>
                            <Button className="btn btn-success" style={{margin:"8% 0% 0% 0%", padding:"25px"}}>
                                Política de Análisis y Especificación de los Requisitos de Seguridad</Button>
                        </a>
                    </div>
                    <div >
                        <a href={"https://epnecuador-my.sharepoint.com/:f:/g/personal/marco_salazar02_epn_edu_ec/Eodmqpbl52ZGmU11pdHIJdsB3iPRCiAdLIy-pgLZqvXicQ?e=FrvqpK"}>
                            <Button className="btn btn-success" style={{margin:"11% 0%", padding:"25px"}}>
                                Video demostración STRIDE y anexos</Button>
                        </a>
                    </div>

                </div>
            </Layout>

        </>
    )
}