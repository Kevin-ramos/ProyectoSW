import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";
import {Document, Page, pdfjs} from "react-pdf";
import {useState} from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function () {
    return (
        <Layout title={"RESTRICCIONES A LOS CAMBIOS EN LOS PAQUETES DE SOFTWARE"}>
            <div className="white">
                <h2>RESTRICCIONES A LOS CAMBIOS EN LOS PAQUETES DE SOFTWARE</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <p style={{width: "60%" , textAlign: "center"}}>Se deberían desalentar las modificaciones a los paquetes de software, limitándose a los cambios
                    necesarios y todos los cambios se deberían controlar estrictamente </p></div>
                <h3> Para complementar siga las guias dadas en la siguiente política:</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    width: "50%"
                }}>
                    <embed src="/g.pdf" type="application/pdf" width="100%" height="600px"/>
                </div>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.4%20Pol%C3%ADtica%20de%20restricciones%20a%20los%20cambios%20en%20los%20paquetes%20de%20software.docx?d=wc234b3265c8d474ba34d1ddf92880f35&csf=1&web=1&e=KtlByw"}>
                    <Button className="btn btn-success" style={{margin: "3% 0%", padding: "25px"}}>
                        Política de restricciones a los cambios en los paquetes de software</Button>
                </a>
            </div>
        </Layout>
    )
}