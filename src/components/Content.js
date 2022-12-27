import React from 'react'
import './Content.css';

function Content() {
  return (
    <div className='Content'>
        <main>
            <article>
                <a id="¡Hola!"><h2>¡Hola!</h2></a>
                <p>Soy Lihuel, profesor de ciencias. Creé este blog como parte de mi estudio de frontend. Quería hacer algo útil
                    mientras aprendo html, CSS y JS, así que aquí espero poder subir con el tiempo algunas presentaciones e información
                    útil para mis alumnos o para cualquier curioso. Soy QFB (Químico Farmacéutico Biólogo), egresado de la UNAM y
                    Maestro en Dirección y Gestión de Centros Educativos egresado de un programa en línea de la UNIR (Universidad
                    Internacional de La Rioja). Creo que la educación online tiene grandes potencialidades tanto para estudiantes
                    como para maestros por la posibilidad de instrucción asíncrona (por ejemplo, ver las clases en video al propio
                    ritmo) y sin barreras geográficas. Sin embargo, también creo en la importancia de la interacción personal
                    por la preparación social que brinda. Lo sigo pensando, pero creo que por ahora un modelo híbrido puede ser muy beneficioso.
                    Por esta creencia es que aquí pretendo compartir información y herramientas digitales que encuentro para que cualquiera
                    (alumno o maestro) pueda servirse de ellas.
                </p>
            </article>
            <article>
                <a id="Inteligencia artificial"><h2>Inteligencia artificial</h2></a>
                <p>Escribo esto el 15 de diciembre de 2022. Vengo siguiendo desde el inicio de la pandemia las novedades en Inteligencia Artificial
                    (por sus siglas IA o AI en inglés). En muy pocos meses, estas herramientas han avanzado muchísimo y me sorprende
                    que muchos compañeros maestros no las utilizan. Dejo aquí el link de una de ellas que está en boga, ChatGPT:
                    <a href="https://openai.com/blog/chatgpt/">ChatGPT de OpenAI</a>. Esta herramienta sólo requiere registrarse y es
                    de uso gratuito ya que al utilizarla y opinar sobre ella estamos contribuyendo a su desarrollo. Aún tiene algunos errores
                    pero espero que les pueda servir como un complemento a Google. Dejo un video con ejemplos de lo que puede hacer:
                    <a href="https://www.youtube.com/watch?v=c_PqM5lPvjY">Probando ChatGPT por DotCSV</a>. Este canal es muy bueno
                    para comenzar a informarse sobre diferentes herramientas basadas en inteligencia artificial. Básicamente ChatGPT
                    puede seguir conversaciones de manera bastante natural y contesta preguntas básicas o complejas, escribe artículos,
                    programa, etc. De hecho lo utilicé para crear la plantilla típica de blog en html de forma más rápida.
                </p>
            </article>
        </main>
    </div>
  )
}

export default Content
