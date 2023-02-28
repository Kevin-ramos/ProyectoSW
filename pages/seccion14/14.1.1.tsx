import Layout from "../../components/Layout";
import GeneratePDF from "../../components/GenerarPdf";

export default function () {
    return (
        <>
            <Layout>
                <div style={{ backgroundColor: "black", verticalAlign:"middle", textAlign:"center", alignItems:"center", padding: "17%"}}>
                    <GeneratePDF person="Hola" />

                </div>
            </Layout>

        </>
    )
 }