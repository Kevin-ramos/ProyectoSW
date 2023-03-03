import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    return (
        <Layout title={"TRANSACCIONES EN LÍNEA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>TRANSACCIONES EN LÍNEA</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <p style={{width: "60%" , textAlign: "center"}}>Se trata de controles que permitan garantizar la seguridad y la integridad de las transacciones en línea, mediante el uso de controles de seguridad adecuados.</p>
                </div>
            <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/d.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.1.3%20Pol%C3%ADtica%20de%20Transacciones%20en%20L%C3%ADnea.docx?d=wa191245a1e10415382bfe6c58a6aadcf&csf=1&web=1&e=DKydDF"}>
                    <Button className="btn btn-success" style={{margin:"3% 0%", padding:"25px"}}>
                        Política de Transacciones en Línea</Button>
                </a>
            </div>
        </Layout>
    )
}