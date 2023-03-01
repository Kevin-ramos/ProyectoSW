// MensajeChat

export interface MensajeChatProps {
    mensaje: string;

}
export default function (respuesta :MensajeChatProps){
    const {mensaje} = respuesta;
    return (<>
        {
            <p> {mensaje}</p>

        }
    </>)
}