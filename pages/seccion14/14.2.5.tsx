import Layout from "../../components/Layout";
import {Button} from "react-bootstrap";

export default function () {
    return (
        <Layout title={"PRINCIPIOS DE LA INGENIERÍA DE SISTEMAS SEGUROS"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>PRINCIPIOS DE LA INGENIERÍA DE SISTEMAS SEGUROS</h2>
                <a href={"https://epnecuador-my.sharepoint.com/:w:/r/personal/marco_salazar02_epn_edu_ec/Documents/8vo/Desarrollo%20seguro/Proyecto/Pol%C3%ADticas/14.2.5%20Pol%C3%ADtica%20de%20principios%20de%20la%20ingenier%C3%ADa%20de%20sistemas%20seguros.docx?d=wdc236ed517734ff995d449a21822c40c&csf=1&web=1&e=cjg5HM"}>
                    <Button className="btn btn-success" style={{margin:"17.5% 0%", padding:"25px"}}>
                        Política de principios de la ingeniería de sistemas seguros</Button>
                </a>
            </div>
        </Layout>
    )
}