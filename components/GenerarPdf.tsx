
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from "jspdf-autotable";

export default function GeneratePDF({ recomendacion: recomendaciones }) {

    function generate() {
        const doc = new jsPDF('l', 'pt', 'a4');
        doc.setFontSize(30)
        doc.setTextColor('#636363')
        doc.setFont('helvetica', 'normal')
        doc.text('RECOMENDACIONES',450,30,{
            align: 'center',
            maxWidth:800
        });
        const numero= recomendaciones.length;
        console.log(numero)

        autoTable(doc, {

            head: [['','','','','','','']],
            body: [
                recomendaciones.map((element) => {
                    return [
                        element
                    ]
                })
                // ...
            ],
        })
        doc.save('recomendacionesSGI.pdf');
    }
    return (
        <div>
            <button onClick={generate}>Descargar Reporte</button>
        </div>
    )
}