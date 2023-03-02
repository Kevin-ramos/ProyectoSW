
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from "jspdf-autotable";

export default function GeneratePDF({ recomendacion: recomendaciones }) {

    function generate() {
        const doc = new jsPDF('l', 'pt', 'a4');
        doc.setFontSize(9)
        doc.setTextColor('#636363')
        doc.setFont('helvetica', 'normal')
        doc.text('RECOMENDACIONES',450,30,{
            align: 'center',
            maxWidth:800
        });
        doc.text(recomendaciones,10,50,{
            align: 'justify',
            maxWidth:800,
            lineHeightFactor:2
        });
        //doc.
        /*autoTable(doc,{
            head: [['RECOMENDACIONES']],
            body:
                person.forEach(({elemento}) => {
                    console.log(elemento)
                    return [
                        [elemento]
                    ]
                }),
        })*/
        doc.save('recomendacionesSGI.pdf');
    }
    return (
        <div>
            <button onClick={generate}>Descargar Reporte</button>
        </div>
    )
}