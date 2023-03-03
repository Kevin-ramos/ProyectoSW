import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {

    return (
        <Layout title={"PRINCIPIOS DE LA INGENIERÍA DE SISTEMAS SEGUROS"}>
            <div className="white">
                <h2>PRINCIPIOS DE LA INGENIERÍA DE SISTEMAS SEGUROS</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "60%" , textAlign: "center"}}>Se deberían establecer, documentar, mantener y aplicar los principios para la ingeniería de sistemas
                    seguros para cualquier labor de implementación del sistema de información.</p></div>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/h.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.5%20Pol%C3%ADtica%20de%20principios%20de%20la%20ingenier%C3%ADa%20de%20sistemas%20seguros.docx?d=wdc236ed517734ff995d449a21822c40c&csf=1&web=1&e=cjg5HM"}>
                    <Button className="btn btn-success" style={{margin: "3% 0%", padding: "25px"}}>
                        Política de principios de la ingeniería de sistemas seguros</Button>
                </a>
            </div>
        </Layout>
    )
}