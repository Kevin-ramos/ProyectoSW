import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    return (
        <Layout title={"PRUEBAS DE SEGURIDAD DEL SISTEMA"}>
            <div className="white">
                <h2>PRUEBAS DE SEGURIDAD DEL SISTEMA</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "60%" , textAlign: "center"}}>Los requisitos para la seguridad de un sistema software deben ser probados como si se tratase de una
                    funcionalidad más del software. Para ello debería implementarse un plan de pruebas documentado que
                    nos ayudará a evaluar la seguridad de nuestro sistema</p></div>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/i.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.8%20Pol%C3%ADtica%20de%20Pruebas%20de%20Seguridad%20del%20Sistema.docx?d=wb518ddd4a66e4dcaa1025715dd9d3400&csf=1&web=1&e=SKR0s9"}>
                    <Button className="btn btn-success" style={{margin: "3% 0%", padding: "25px"}}>
                        Política de Pruebas de Seguridad del Sistema</Button>
                </a>
            </div>
        </Layout>
    )
}