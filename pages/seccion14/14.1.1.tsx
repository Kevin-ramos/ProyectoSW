import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";

export default function () {
    const descargarReporte = (e)=>{
        e.preventDefault();
        console.log("haza aplastado para generar el reporte");
    }

    return (
        <>
            <Layout>
                <GeneratePDF person="Hola" />
            </Layout>

        </>
    )
 }