import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import {Viewer} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [file, setFile] = useState("/j.pdf");
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages: nextNumPages}) {
        setNumPages(nextNumPages);
    }

    return (
        <Layout title={"PROTECCIÓN DE DATOS DE PRUEBA"}>
            <div style={{backgroundColor: "white", textAlign: "center"}}>
                <h2>PROTECCIÓN DE DATOS DE PRUEBA</h2>
                <p>La política de Protección de Datos de Prueba tiene como objetivo proteger la información confidencial
                    y sensible de la organización en los entornos de pruebas, utilizando datos no reales y garantizando
                    su anonimización y seguridad. </p>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/k.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.3.1%20Pol%C3%ADtica%20de%20Protecci%C3%B3n%20de%20Datos%20de%20Prueba.docx?d=wa79ccbc90bac488cad99718f2e2e4f57&csf=1&web=1&e=GBevkw"}>
                    <Button className="btn btn-success" style={{margin: "17.5% 0%", padding: "25px"}}>
                        Política de Protección de Datos de Prueba</Button>
                </a>
            </div>
        </Layout>
    )
}