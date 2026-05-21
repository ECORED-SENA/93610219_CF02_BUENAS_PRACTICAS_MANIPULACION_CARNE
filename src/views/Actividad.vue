<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación de conocimientos en Buenas Prácticas de Manufactura e inocuidad en la industria cárnica.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión de los conceptos fundamentales relacionados con la inocuidad alimentaria, normatividad sanitaria y Buenas Prácticas de Manufactura, con el fin de fortalecer la aplicación de medidas higiénicas y de control en los procesos de manipulación de carne',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por inocuidad alimentaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alimento libre de contaminantes y seguro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Alimento con buen sabor y presentación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alimento con mayor contenido nutricional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alimento producido de forma artesanal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto:
            '¿Qué entidad supervisa el procesamiento de alimentos en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ICA como autoridad de producción primaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'INVIMA en control de alimentos procesados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'OMS como autoridad sanitaria nacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'FAO como ente regulador interno nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto: '¿Cuál es el objetivo principal del Decreto 1500 de 2007?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular precios de productos cárnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer normas de exportación alimentaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar la cadena cárnica en Colombia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promover el consumo de carne nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: '¿Qué significa que la carne sea un alimento perecedero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se conserva sin necesidad de refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puede durar largos periodos sin deterioro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se deteriora fácilmente por sus condiciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo cambia de color durante el tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: '¿Qué sistema se utiliza para el control de riesgos críticos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'BPM como sistema de higiene general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'POES para limpieza y desinfección diaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'HACCP para control de puntos críticos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'PEPS para rotación de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una característica de los materiales aptos para alimentos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deben ser porosos y absorbentes siempre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Deben ser resistentes y no contaminantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Deben ser económicos y reutilizables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deben ser de madera tratada industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: '¿Qué es la contaminación cruzada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezcla de ingredientes en un alimento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Paso de microorganismos entre alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de equipos en diferentes procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicación de desinfectantes en exceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el rango de la zona de peligro bacteriano?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entre 0 °C y 4 °C en refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entre -18 °C y 0 °C en congelación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre 5 °C y 60 °C en alimentos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Entre 60 °C y 100 °C en cocción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto: '¿Qué función cumple la cadena de frío?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el sabor de la carne fresca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el transporte sin control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la textura del producto final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el crecimiento microbiano.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto: '¿Qué ocurre si el pH de la carne es alto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el crecimiento microbiano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejora la conservación del alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuye la proliferación bacteriana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se estabiliza la calidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto: '¿Cuál es la temperatura adecuada de congelación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0 °C para mantener la carne fresca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '-10 °C para evitar descomposición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5 °C para reducir las bacterias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '-18 °C o menor para conservación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto: '¿Qué práctica evita la contaminación del manipulador?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de joyas durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lavado de manos frecuente y correcto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de ropa oscura en las plantas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manipulación directa sin protección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: '¿Qué elemento hace parte de los EPP?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Termómetro de medición interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estibas para almacenamiento interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balanzas para control de peso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guantes para evitar contacto directo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto: '¿Qué acción corresponde a la limpieza?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación de microorganismos con químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción de bacterias mediante calor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de suciedad visible con detergente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicación de desinfectantes en superficies.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: '¿Qué debe hacerse antes de desinfectar?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar una limpieza previa adecuada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aplicar cloro directamente al equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Secar completamente las superficies.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calentar los utensilios a alta temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto: '¿Cuál es un requisito del manipulador de alimentos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No asistir a capacitaciones sanitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar buen estado de salud general.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Manipular alimentos aun estando enfermo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de elementos de protección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto: '¿Qué característica tienen las BPM?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son correctivas y actúan después del daño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son opcionales en la industria alimentaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son exclusivas del transporte de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son preventivas y evitan la contaminación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto: '¿Qué función tiene el sistema PEPS?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rotar productos según fecha de ingreso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Controlar la temperatura de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limpiar equipos después de cada uso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desinfectar utensilios de procesamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto: '¿Qué consecuencia tiene incumplir la normatividad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora en la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento de ventas del negocio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sanciones y cierre del establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mayor vida útil de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto: '¿Cuál es el rol del manipulador en la inocuidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo ejecutar tareas sin responsabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser un actor pasivo en el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Depender únicamente de la supervisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar riesgos y prevenir contaminación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
