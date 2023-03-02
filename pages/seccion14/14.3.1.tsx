import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

export default function () {
    return (
        <Layout title={"PROTECCIÓN DE DATOS DE PRUEBA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>PROTECCIÓN DE DATOS DE PRUEBA</h2>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.3.1%20Pol%C3%ADtica%20de%20Protecci%C3%B3n%20de%20Datos%20de%20Prueba.docx?d=wa79ccbc90bac488cad99718f2e2e4f57&csf=1&web=1&e=GBevkw"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Protección de Datos de Prueba</Button>
                </a>
            </div>
        </Layout>
    )
}