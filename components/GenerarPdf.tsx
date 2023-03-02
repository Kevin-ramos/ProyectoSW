
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from "jspdf-autotable";

export default function GeneratePDF({ recomendacion: recomendaciones, string:norma }) {

    function generate() {
        const doc = new jsPDF('l', 'pt', 'a4');
        const logoPesnot = new Image();
        logoPesnot.src = '/seguridad.png';
        doc.addImage(logoPesnot, 'png', 700, 1, 100, 60)
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

            {recomendaciones.length > 0 &&
                (            <button className="btn btn-success" onClick={generate}>Descargar Reporte</button>
                )
            }
        </div>
    )
}