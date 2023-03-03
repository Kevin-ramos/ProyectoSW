import Layout from "../../components/Layout";
import {Grid} from "@mui/material";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Respuestas from "../../components/Respuestas";
import GeneratePDF from "../../components/GenerarPdf";

export interface Preguntas {
    primeraPregunta: string;
    segundaPregunta: string;
    terceraPregunta: string;
    cuartaPregunta: string;
    quintaPregunta: string;
    sextaPregunta: string;
    septimaPregunta: string;
    octavaPregunta: string;
}

export default function () {

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            primeraPregunta: '',
            segundaPregunta: '',
            terceraPregunta: '',
            cuartaPregunta: '',
            quintaPregunta: '',
            sextaPregunta: '',
            septimaPregunta: '',
            octavaPregunta: '',
        },
        mode: 'all'
    });
    const [preguntas, setPreguntas] = useState([]);
    const titulo = "POLÍTICA DE DESARROLLO SEGURO"

    useEffect(() => {
        setPreguntas([]);
    }, [])

    const responderPreguntas = (preguntasFormulario: Preguntas) => {
        if (preguntasFormulario.primeraPregunta == "1") {
            const respuestaPreguntaUno = "Recuerde que los objetivos de la capacitación no es ser expertos, si no entender como un atacante podría vulnerar nuestro sistema bajo los estándares actuales";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaUno]);

        } else {
            const respuestaPreguntaUno = "Se recomienda que los desarrolladores reciban entrenamiento periódico de seguridad, si bien no se espera que se conviertan en expertos se espera que se tenga cierto entendimiento del tema para poder asegurarnos de que podemos ver desde la perspectiva de atacantes nuestro sistema y mejorar el control de amenazas";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaUno]);
        }
        if (preguntasFormulario.segundaPregunta == "1") {

        } else {
            const respuestaPreguntaDos = "El CVE es una lista de vulnerabilidades conocidas, no solo nos puede notificar de vulnerabilidades que desconocíamos dentro del software como usuarios y poder localizar una actualización critica, sino que además nos puede ayudar a identificar amenazas dentro del software que nosotros estamos desarrollando.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaDos]);
        }
        if (preguntasFormulario.terceraPregunta == "1") {
            const respuestaPreguntaTres = "Si bien parte de la documentación se genera al inicio del ciclo de vida debemos ir generando la documentación que necesitemos durante TODO el ciclo de vida, no solo basta con documentos de planificación o requerimientos, debemos documentar la implementación y otros procesos ya que al final la documentación es la evidencia del trabajo que estamos realizando.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else if (preguntasFormulario.terceraPregunta == "2") {
            const respuestaPreguntaTres = "Es mala práctica dejar la documentación para el final de ciclo de vida, el no llevar nuestra documentación a la par que el desarrollo de software nos puede llevar a inconsistencias y futuros problemas cuando queramos consultar la documentación y no se corresponda con el sistema.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else {
            const respuestaPreguntaTres = "La documentación es tan importante como el propio producto, llevarlos es la mano es buena práctica y nos ahorrara problemas más adelante.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        }

        if (preguntasFormulario.cuartaPregunta == "1") {
            const respuestaPreguntaCuatro = "Se recomienda además que, si estamos utilizando credenciales, estas contraseñas comunes sean prohibidas a los usuarios.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaCuatro]);
        } else {
            const respuestaPreguntaCuatro = "Existen listas de contraseñas comunes las cuales los atacantes pueden usar para vulnerar nuestro sistema, puede conocerlas aquí: \n" +
                "SecLists/Passwords at master · danielmiessler/SecLists · GitHub\n" +
                "Se recomienda además que, si estamos utilizando credenciales, estas contraseñas comunes sean prohibidas a los usuarios\n"
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaCuatro]);
        }
        if (preguntasFormulario.quintaPregunta == "1") {
            const respuestaPreguntaCinco = "Recuerde seguir una política de uso de cifrado de datos, como por ejemplo https://andinoblob.blob.core.windows.net/media/filer_public/fd/c1/fdc138e9-2bdb-427b-b335-97c2bd251567/politica_controles_criptograficos_y_gestion_de_contrasenas_v2_003.pdf ";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaCinco]);
        } else {
        }

        if (preguntasFormulario.sextaPregunta == "1") {
            const respuestaPreguntaTres = "Recuerde que una auditoria que se realiza y no se corrigen los problemas es una auditoria perdida, por favor refiérase al informe de su auditoria más reciente y asegúrese que sus problemas han sido corregidos o estén en proceso de corregirse";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else if (preguntasFormulario.sextaPregunta == "2") {
            const respuestaPreguntaTres = "Este tiempo es suficiente para que nuevas violaciones a las políticas hayan sido creadas, recuerde que estas están ahí por un motivo e incumplirnos nos puede llevar a problemas. Está a tiempo de realizar un auditoria, ya sea interna o con expertos, y corregir sus para evitar daños futuros.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else {
            const respuestaPreguntaTres = "Probablemente el incumplimiento de normas ya ha llevado a problemas dentro de la empresa. Solicite una auditoria con expertos y Asegúrese de resolver los problemas que se encuentren.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        }

        if (preguntasFormulario.septimaPregunta == "1") {
            const respuestaPreguntaTres = "La validación de información debe hacerse durante todo el ciclo de esta, no hacerlo puede hacernos propensos a taques como la inyección SQL.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else if (preguntasFormulario.septimaPregunta == "0") {
            const respuestaPreguntaTres = "La validación de información debe hacerse durante todo el ciclo de esta, no hacerlo puede hacernos propensos a taques como la inyección SQL.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaTres]);
        } else {

        }

        if (preguntasFormulario.octavaPregunta == "1") {
            const respuestaPreguntaCinco = "Si bien la experiencia puede llevar a que durante etapas tempranas del desarrollo podamos capturar exitosamente los controles de seguridad necesarios para nuestro sistema, es una buena práctica revisar nuestros controles propuestos e irlos afinando en base a lo que necesitemos, debemos recordar que el proceso de desarrollo no es algo estático y aprender a abrazar estos cambios.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaCinco]);
        } else {
            const respuestaPreguntaCinco = "Recuerde que evolucionar no significa que debamos crear todo desde cero, confíe en la experiencia de sus pares que llevaron a establecer esos controles en primer lugar y si se deben afinar, afinarlos. Nuestro propósito es hacer el mejor software posible y para ello necesitamos tanto experiencia como flexibilidad que nos llevaran a una mejor toma de decisiones.";
            setPreguntas((respuestaAnterior) => [...respuestaAnterior, respuestaPreguntaCinco]);
        }

    }

    return (
        <Layout title={titulo}>
            <div className="white">
                <h2>POLÍTICA DE DESARROLLO SEGURO</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <p style={{width: "60%" , textAlign: "center"}}>
                        Se deben establecer reglas para que la seguridad de la información sea tenida en cuenta en todo el
                    proceso de desarrollo del software y en todo el ciclo de vida del mismo. Estas reglas deben tener en
                    cuenta aspectos como:
                    La seguridad en entornos de desarrollo
                    La política determina la metodología que se aplica en el desarrollo del software
                    Como se gestionan las distintas versiones de software
                    Como se gestionan las vulnerabilidades del software
                    Como se asegura los controles de seguridad en software subcontratado
                    Como se establecen requisitos de seguridad en la fase de definición de funcionalidades del software
                </p>
                </div>
                <div className="row">
                    <div className="col-sm-6" style={{textAlign: "left"}}>
                        <div style={{textAlign: "center"}}>
                            <h3>Cuestionario</h3>
                        </div>
                        <form onSubmit={handleSubmit(responderPreguntas)}>
                            <div className="mi-etiqueta">
                                <label htmlFor="primeraPregunta" className="form-label">
                                    1. ¿En la empresa se realiza entrenamiento periódico de los desarrolladores acerca
                                    de la seguridad?
                                </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="si" value="1"
                                           {...register("primeraPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="no" value="0"
                                           {...register("primeraPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">No </label>
                                </div>
                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="segundaPregunta" className="form-label">
                                    2. ¿Conoce las vulnerabilidades más recientes publicadas por el CVE acerca de
                                    software que utiliza? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="si" value="1"
                                           {...register("segundaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="no" value="0"
                                           {...register("segundaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">No </label>
                                </div>
                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="terceraPregunta" className="form-label">
                                    3. ¿Cuándo se realiza la documentación del desarrollo? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="terceraPregunta"
                                           id="1" value="1"
                                           {...register("terceraPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="1">Únicamente al inicio del ciclo de
                                        vida </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="terceraPregunta"
                                           id="2" value="2"
                                           {...register("terceraPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="2">Únicamente al final del ciclo de
                                        vida </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="terceraPregunta"
                                           id="3" value="3"
                                           {...register("terceraPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="3">Durante todo el ciclo de
                                        vida</label>
                                </div>

                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="cuartaPregunta" className="form-label">
                                    4. ¿Conoce las contraseñas más comunes y por qué no debería utilizarlas? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="cuartaPregunta"
                                           id="si" value="1"
                                           {...register("cuartaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="cuartaPregunta"
                                           id="no" value="0"
                                           {...register("cuartaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">No </label>
                                </div>

                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="quintaPregunta" className="form-label">
                                    5. ¿Requiere dentro de sus sistema cifrado de datos? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="quintaPregunta"
                                           id="si" value="1"
                                           {...register("quintaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="quintaPregunta"
                                           id="no" value="0"
                                           {...register("quintaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">No </label>
                                </div>

                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="sextaPregunta" className="form-label">
                                    6. ¿Hace cuánto fue la última vez que realizo auditoria? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="sextaPregunta"
                                           id="1" value="1"
                                           {...register("sextaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="1">De uno a dos años </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="sextaPregunta"
                                           id="2" value="2"
                                           {...register("sextaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="2">Hace tres años </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="sextaPregunta"
                                           id="3" value="3"
                                           {...register("sextaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="3">Hace más de tres años </label>
                                </div>


                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="septimaPregunta" className="form-label">
                                    7. ¿Dónde se debería la validación de datos de entrada? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="septimaPregunta"
                                           id="si" value="1"
                                           {...register("septimaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">En el Front-end </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="septimaPregunta"
                                           id="no" value="0"
                                           {...register("septimaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">En el Back-end </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="septimaPregunta"
                                           id="3" value="3"
                                           {...register("septimaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="3">En ambos </label>
                                </div>

                            </div>
                            <div className="mi-etiqueta">
                                <label htmlFor="quintaPregunta" className="form-label">
                                    8. Una vez establecidos los controles de seguridad en la fase de diseño ¿Pueden
                                    cambiar? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="octavaPregunta"
                                           id="si" value="1"
                                           {...register("octavaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="si">No, son fijos </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="octavaPregunta"
                                           id="no" value="0"
                                           {...register("octavaPregunta", {required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="no">Sí, deben evolucionar con el
                                        software </label>
                                </div>

                            </div>

                            <div style={{textAlign: "center"}}>
                                <button type="submit"
                                        disabled={!isValid}
                                        className="btn btn-success">
                                    Generar reporte
                                </button>
                            </div>


                        </form>
                    </div>
                    <div className="col-sm-6">
                        <h3>Recomendaciones</h3>
                        {preguntas.map((pregunta: string, index) =>
                            <Respuestas key={index} mensaje={pregunta}/>
                        )}
                        <GeneratePDF recomendacion={preguntas} string={titulo}/>
                    </div>

                </div>


            </div>
        </Layout>
    )
}