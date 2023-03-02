import Layout from "../../components/Layout";
import {Grid} from "@mui/material";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Respuestas from "../../components/Respuestas";

export interface Preguntas{
    primeraPregunta: string;
    segundaPregunta: string;
    terceraPregunta: string;
    cuartaPregunta: string;
    quintaPregunta: string;
}

export default function () {
    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            primeraPregunta: '',
            segundaPregunta: '',
            terceraPregunta: '',
            cuartaPregunta: '',
            quintaPregunta: ''
        },
        mode: 'all'
    });
    const [preguntas, setPreguntas] = useState([]);
    useEffect(()=>{
        setPreguntas([]);
    },[])

    const responderPreguntas = (preguntasFormulario: Preguntas)=>{
        if(preguntasFormulario.primeraPregunta >= "4"){
            const respuestaPreguntaUno = "El ambiente de desarrollo será separado de cualquier otro ambiente de desarrollo.\n" +
                "Se deberá tener un registro de ingreso al ambiente de desarrollo, donde solo podrá ingresar los desarrolladores que trabajen activamente en el proyecto.\n" +
                "Este ambiente además deberá tener seguridad física que no permita el ingreso de terceros.\n" +
                "En caso de ser necesario el ingreso de un nuevo desarrollador debe tener al menos 5 años dentro de la empresa y deberá firmar un acuerdo de confidencialidad.\n"
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaUno]);

        }else if(preguntasFormulario.primeraPregunta >= "3"){
            const respuestaPreguntaUno = "El ambiente de desarrollo debe tener controles que nos permitan el registro de desarrolladores que ingresan, de ser necesario este ambiente de desarrollo deberá ser aislado.\n" +
                "Al ambiente de desarrollo podrán ingresan desarrolladores activos y stakeholders.\n" +
                "Se podrá compartir el ambiente de desarrollo con desarrolladores junior siempre y cuando NO tengan acceso a los datos que se utilizan si no únicamente a datos de prueba falsos para el desarrollo.\n"
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaUno]);

        }else{
            const respuestaPreguntaUno = "Se implementaran controles que nos permitan el registro de acceso de los usuarios que entran al ambiente de desarrollo."
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaUno]);
        }
        if(preguntasFormulario.segundaPregunta >="4"){
            const respuestaPreguntaDos = "Todos los empleados que tengan relación con este desarrollo deben firmar acuerdos de confidencialidad y asistir obligatoriamente a entrenamiento de seguridad"
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaDos]);
        }else if(preguntasFormulario.segundaPregunta >="2"){
            const respuestaPreguntaDos = "Debemos asegurarnos de que los empleados entiendan que tan sensible es esta información y dar charlas para entrenamiento en seguridad de la información."
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaDos]);
        }
        if(preguntasFormulario.terceraPregunta == "1"){
        }else {
            const respuestaPreguntaTres = "Definir que tipo de patente se va a usar para el código y asegurarse quien tiene acceso a este código, siguiendo un política de acceso por capas"
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaTres]);
        }
        if(preguntasFormulario.cuartaPregunta == "1"){
            const respuestaPreguntaCuatro = "Debe implementar Políticas de comunicación entre los multiples sitios de desarrollo, se debe tomar en cuenta las politicas de acceso remoto y además implementar el resto de politicas en todos los ambientes de desarrollo. "
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaCuatro]);
        }else {
        }
        if(preguntasFormulario.quintaPregunta == "1"){
            const respuestaPreguntaCinco = "Asegurarse que los respaldos están siendo generados con la suficiente frecuencia dependiendo de la sensibilidad de la información, además de implementar políticas de seguridad, como el control de acceso y autorizaciones, en cuanto a quien tiene acceso a estos respaldos"
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaCinco]);
        }else {
            const respuestaPreguntaCinco = "Se sugiere el uso de respaldos y determinar su generación en base a la sensibilidad de la información, además de implementar políticas de seguridad, como el control de acceso y autorizaciones, en cuanto a quien tiene acceso a estos respaldos."
            setPreguntas((respuestaAnterior)=>[...respuestaAnterior,respuestaPreguntaCinco]);
        }

    }

    return (
        <Layout title={"AMBIENTE DE DESARROLLO SEGURO"}>
            <div style={{ backgroundColor: "white", textAlign:"center"}}>
                <h2>AMBIENTE DE DESARROLLO SEGURO</h2>
                <p>La evaluación de riesgos para la seguridad de la información no solo debe afectar a los activos de información como software, datos o equipos y soportes sino que también debe aplicarse a los entornos de desarrollo, las personas, los procesos de desarrollo y las tecnologías utiliza dadas para determinar si es necesario aplicar medidas o controles de seguridad</p>
                <div className="row">
                    <div className="col-sm-6"  style={{textAlign:"left"}}>
                        <div style={{textAlign:"center"}}>
                            <h3>Cuestionario</h3>
                        </div>
                        <form onSubmit={handleSubmit(responderPreguntas)} >
                            <div className="mb-3">
                                <label htmlFor="primeraPregunta" className="form-label">¿Qué grado de sensibilidad tienen sus datos? Siendo 1 información publica y siendo 5 información sensible como financiera</label>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="5" value="5"
                                           {...register("primeraPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="5">5  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="4" value="4"
                                           {...register("primeraPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="4">4  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="3" value="3"
                                           {...register("primeraPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="3">3  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="2" value="2"
                                           {...register("primeraPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="2">2  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="primeraPregunta"
                                           id="1" value="1"
                                           {...register("primeraPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="1">1  </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="segundaPregunta" className="form-label">¿Qué confiabilidad tiene su personal? Siendo 1 nada confiable y siendo 5 totalmente confiable</label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="5" value="5"
                                           {...register("segundaPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="5">5  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="4" value="4"
                                           {...register("segundaPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="4">4  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="3" value="3"
                                           {...register("segundaPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="3">3  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="2" value="2"
                                           {...register("segundaPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="2">2  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="segundaPregunta"
                                           id="1" value="1"
                                           {...register("segundaPregunta",{required: "Seleccione una opción"})}

                                    />
                                    <label className="form-check-label" htmlFor="1">1  </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="terceraPregunta" className="form-label">
                                    ¿Qué tan estricta es la licencia de su código? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="terceraPregunta"
                                           id="codigoAbierto" value="1"
                                           {...register("terceraPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="codigoAbierto">Código Abierto  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="terceraPregunta"
                                           id="codigoPropietario" value="0"
                                           {...register("terceraPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="codigoPropietario">Código Propietario  </label>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="cuartaPregunta" className="form-label">
                                    ¿Tiene más de un sitio de desarrollo? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="cuartaPregunta"
                                           id="si" value="1"
                                           {...register("cuartaPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="cuartaPregunta"
                                           id="no" value="0"
                                           {...register("cuartaPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="no">No  </label>
                                </div>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="quintaPregunta" className="form-label">
                                    ¿Genera respaldos de la información que utiliza? </label>
                                <br/>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="quintaPregunta"
                                           id="si" value="1"
                                           {...register("quintaPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="si">Sí  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio"
                                           name="quintaPregunta"
                                           id="no" value="0"
                                           {...register("quintaPregunta",{required: "Seleccione una opción"} )}

                                    />
                                    <label className="form-check-label" htmlFor="no">No  </label>
                                </div>

                            </div>
                            <div style={{textAlign:"center"}}>
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
                        {preguntas.map((pregunta:string, index)=>
                            <Respuestas key={index} mensaje={pregunta}/>

                        )}
                    </div>

                </div>


            </div>
        </Layout>
    )
}