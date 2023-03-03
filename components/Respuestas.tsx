// MensajeChat

export interface MensajeChatProps {
    mensaje: string;

}
export default function (respuesta :MensajeChatProps){
    const {mensaje} = respuesta;
    return (<>
        {<div className="mi-etiqueta">
            <p> {mensaje}</p>
        </div>

        }
    </>)
}