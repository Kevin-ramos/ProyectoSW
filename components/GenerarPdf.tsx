
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from "jspdf-autotable";

export default function GeneratePDF({ person }) {

    function generate() {
        const doc = new jsPDF('l', 'pt', 'a4');
        doc.setFontSize(25)
        doc.setTextColor('#636363')
        doc.setFont('helvetica', 'normal')
        doc.text("LOS CONSEJOS SON "+person, 185, 75, {
            align: 'center',
            maxWidth: 300
        })
        autoTable(doc, {
            html: '#listado',
            startY: 90,
            styles: {
                fontSize: 8,
                cellWidth: 'auto',
                overflow: 'linebreak'
            },
        })

        doc.save('listado_notarias.pdf');
    }
    return (
        <div>
            <button onClick={generate}>Download PDF</button>
        </div>
    )
}