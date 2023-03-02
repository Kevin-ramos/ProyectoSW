// MensajeChat

export interface MensajeChatProps {
    mensaje: string;

}
export default function (respuesta :MensajeChatProps){
    const {mensaje} = respuesta;
    return (<>
        {<div style={{textAlign:"justify"}}>
            <p> {mensaje}</p>
        </div>

        }
    </>)
}