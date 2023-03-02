import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";
import { Document, Page } from 'react-pdf';
import {useState} from "react";

export default function () {
    const titulo ="ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD"
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState("./a.pdf");

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <Layout title={titulo}>

                <div style={{ backgroundColor: "white", textAlign:"center"}}>
                    <h2>ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD</h2>
                    <GeneratePDF recomendacion="Hola" string={titulo} />

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
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            </Layout>

        </>
    )
 }