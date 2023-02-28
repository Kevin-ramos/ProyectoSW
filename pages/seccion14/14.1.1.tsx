import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";

export default function () {
    return (
        <>
            <Layout title="ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD">

                <div style={{ backgroundColor: "black", textAlign:"center", padding: "17%"}}>
                    <h2>ANÁLISIS Y ESPECIFICACIÓN DE LOS REQUISITOS DE SEGURIDAD</h2>
                    <GeneratePDF person="Hola" />
                </div>
            </Layout>

        </>
    )
 }