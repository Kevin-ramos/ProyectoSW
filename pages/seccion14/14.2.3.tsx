import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    return (
        <Layout title={"REVISIÓN TÉCNICA DE APLICACIONES DESPUÉS DE CAMBIOS DE LAS PLATAFORMAS OPERATIVAS"}>
            <div className="white">
                <h2>REVISIÓN TÉCNICA DE APLICACIONES DESPUÉS DE CAMBIOS DE LAS PLATAFORMAS OPERATIVAS</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "60%" , textAlign: "center"}}>Cuando se cambian las plataformas operativas, las aplicaciones críticas para el negocio se deberían
                    revisar y probar para asegurarse de que no se ha generado un impacto adverso en las operaciones o en
                    la seguridad de la organización </p></div>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/f.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.3%20Pol%C3%ADtica%20de%20Revisi%C3%B3n%20T%C3%A9cnica%20de%20Aplicaciones%20Despu%C3%A9s%20de%20Cambios%20de%20las%20Plataformas%20Operativas.docx?d=w49ae5516524a409382cd276c745ada87&csf=1&web=1&e=MJGeQx"}>
                    <Button className="btn btn-success" style={{margin: "3% 0%", padding: "25px"}}>
                        Política de Revisión Técnica de Aplicaciones Después de Cambios de las Plataformas
                        Operativas</Button>
                </a>
            </div>
        </Layout>
    )
}