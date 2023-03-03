import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    return (
        <Layout title={"PROCEDIMIENTO DE CONTROL DE CAMBIO DEL SISTEMA"}>
            <div className="white">
                <h2>PROCEDIMIENTO DE CONTROL DE CAMBIO DEL SISTEMA</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "60%" , textAlign: "center"}}>El objetivo de esta política es garantizar que todos los cambios realizados en los sistemas de
                    información sean planificados, evaluados, autorizados, implementados y evaluados de manera segura y
                    efectiva.</p></div>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/e.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.2%20Pol%C3%ADtica%20de%20Gesti%C3%B3n%20de%20Cambios.docx?d=wa44bd140835d4d27a7eaf24ace2f2f8d&csf=1&web=1&e=l55fwA"}>
                    <Button className="btn btn-success" style={{margin: "3% 0%", padding: "25px"}}>
                        Política de Gestión de Cambios</Button>
                </a>
            </div>
        </Layout>
    )
}