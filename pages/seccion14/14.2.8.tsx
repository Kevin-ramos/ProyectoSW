import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

export default function () {
    return (
        <Layout title={"PRUEBAS DE SEGURIDAD DEL SISTEMA"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>PRUEBAS DE SEGURIDAD DEL SISTEMA</h2>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.8%20Pol%C3%ADtica%20de%20Pruebas%20de%20Seguridad%20del%20Sistema.docx?d=wb518ddd4a66e4dcaa1025715dd9d3400&csf=1&web=1&e=SKR0s9"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de Pruebas de Seguridad del Sistema</Button>
                </a>
            </div>
        </Layout>
    )
}