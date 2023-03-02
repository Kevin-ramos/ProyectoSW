
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from "jspdf-autotable";

export default function GeneratePDF({ recomendacion: recomendaciones, string:norma }) {

    function generate() {
        const doc = new jsPDF('l', 'pt', 'a4');
        doc.setFontSize(20)
        doc.setTextColor('#636363')
        doc.setFont('helvetica', 'normal')
        doc.text('SOFTWARE SEGURO CON '+'\n'+norma,450,30,{
            align: 'center',
            maxWidth:800
        });
        const numero= recomendaciones.length;
        console.log(numero)

        autoTable(doc, {
            startY: 90,
            head: [['CHECK','RECOMENDACIÓN']],
            body:
                recomendaciones.map((element) => {
                    return ['___',
                        element
                    ]
                })
                // ...
            ,
        })
        doc.save('recomendacionesSGI.pdf');
    }
    return (
        <div>
            <button onClick={generate}>Descargar Reporte</button>
        </div>
    )
}