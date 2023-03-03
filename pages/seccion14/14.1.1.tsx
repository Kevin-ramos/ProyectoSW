import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";
import {Document, Page, pdfjs} from "react-pdf";
import ReactPlayer from 'react-player';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {useState} from "react";
import {Button} from "react-bootstrap";


export default function () {
    const titulo = "ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD"
    const [file, setFile] = useState("/b.pdf");
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages: nextNumPages}) {
        setNumPages(nextNumPages);
    }

    return (
        <>
            <Layout title={titulo}>

                <div style={{backgroundColor: "white", textAlign: "center"}}>
                    <h2>ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD</h2>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <p style={{width: "60%" , textAlign: "center"}}>
                            El objetivo de esta política es garantizar que los requisitos de seguridad para las aplicaciones
                            y sistemas sean adecuadamente analizados y especificados, de manera que se asegure la protección
                            de los activos involucrados y se cumpla con las normativas y estándares de seguridad
                            establecidos </p>
                    </div>
                    <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                    <div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            width: "50%"
                        }}>
                            <embed src="/b.pdf" type="application/pdf" width="100%" height="600px"/>
                        </div>
                        <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.1.1%20Pol%C3%ADtica%20de%20An%C3%A1lisis%20y%20Especificaci%C3%B3n%20de%20los%20Requisitos%20de%20Seguridad.docx?d=wfcde79a6e3d6431d9681f6a06eab37f8&csf=1&web=1&e=QqmubA"}>
                            <Button className="btn btn-success" style={{margin: "3% 0% 0% 0%", padding: "25px"}}>
                                Política de Análisis y Especificación de los Requisitos de Seguridad</Button>
                        </a>
                    </div>
                    <div style={{margin: "3% 0% 0% 0%", padding: "25px"}}>
                        <h1 style={{margin: "2%"}} >Video de demostración de la herramienta para modelado</h1>
                        <video width="320" height="240" controls>
                            <source src="../public/Demostración_de_Herramienta_para_modelamiento.mp4" type="video/mkv"/>
                        </video>
                    </div>

                </div>
            </Layout>

        </>
    )
}