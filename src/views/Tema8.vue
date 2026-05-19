<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Requisitos y responsabilidad del manipulador de alimentos
    .caja-1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 El manipulador de alimentos es considerado el #[b principal punto crítico humano] dentro de la cadena de inocuidad, ya que interviene directamente en el producto. Diversos estudios en seguridad alimentaria han demostrado que una alta proporción de brotes de enfermedades transmitidas por alimentos (ETA) se originan por prácticas inadecuadas del personal.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img131.png', alt='').m-auto
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Rol del manipulador en la cadena de inocuidad
    p.mb-5 El manipulador no solo ejecuta tareas, sino que actúa como un controlador activo de riesgos. El enfoque por etapas es el siguiente:
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="Enfoque por etapas del proceso cárnico" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Enfoque por etapas del proceso cárnico
            p.mb-0 En la recepción, se verifica calidad y temperatura para evitar materia prima contaminada. En corte y desposte, se previene la contaminación cruzada. En procesamiento, se controlan riesgos microbianos mediante BPM. En empaque, se evitan recontaminaciones, y en almacenamiento, se controla la temperatura para impedir crecimiento bacteriano.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img132.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Ejemplo práctico" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Ejemplo práctico
            p.mb-0  Un operario que no se lava las manos después de manipular vísceras puede transferir microorganismos como Salmonella a carne limpia → #[b contaminación cruzada directa].
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img133.png', alt="" style="max-width: 450px").m-auto
    p.mb-0 El manipulador es considerado un vector de contaminación, pero también el primer control sanitario del proceso.
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Responsabilidad legal según la normativa vigente
    p.mb-5 La legislación colombiana establece que el manipulador es responsable de cumplir normas sanitarias obligatorias. Las normas, responsabilidades y análisis de riesgos son:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Profundización normativa
                p.mb-0 #[b Resolución 2674 de 2013 ]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Exige capacitación obligatoria. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de salud del manipulador. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cumplimiento de higiene. 
                p.mb-0 #[b Decreto 1500 de 2007 ]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Regula plantas de beneficio. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Establece controles estrictos en carne. 
                p.mb-0 #[b Ley 9 de 1979 ]
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Define responsabilidades sanitarias generales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img134.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Responsabilidad compartida
                p.mb-0 En el control sanitario, la empresa es responsable de capacitar y supervisar al personal, el manipulador debe cumplir las normas establecidas y la autoridad sanitaria se encarga de vigilar y sancionar el cumplimiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img135.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis de riesgo legal
                p Si un manipulador enfermo contamina alimentos y causa un brote:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Puede haber #[b responsabilidad disciplinaria]. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Sanciones al establecimiento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Afectación a la salud pública. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img136.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Ética y compromiso en la manipulación de alimentos
    p.mb-5 Más allá de la norma, el manipulador debe actuar con conciencia sanitaria.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img137.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Dimensión ética ampliada
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Inspección de materias primas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de temperatura. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Análisis microbiológicos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Verificación de procesos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de vida útil. 
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img138.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Ejemplo real aplicado
                p El manipulador de alimentos trabaja con productos destinados a niños, adultos y poblaciones vulnerables; por ello, un error puede provocar hospitalizaciones o incluso muertes, evidenciando el impacto social directo de su labor.
                p Un trabajador que decide no reportar diarrea por miedo a perder el día laboral puede provocar un brote alimentario.
                p.mb-0 Esto convierte la ética en un factor crítico de inocuidad.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img139.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cultura de inocuidad
                p Se promueve cuando el manipulador:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Comprende el riesgo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Actúa preventivamente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Se apropia de las normas. 
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Condiciones de salud del manipulador
    p.mb-5 El cuerpo humano es un reservorio natural de microorganismos, muchos de ellos patógenos. Seguidamente, se conocerán los tipos de portadores, las zonas críticas del cuerpo y un ejemplo técnico: 
    .row.justify-content-center.mb-5
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 12.
          span Tipos de portadores
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Tipo
                th.texto-left Descripción
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Portador sano
                td.texto-left  No presenta síntomas, pero transmite enfermedad
              tr
                td.ajuste-border-tabla.texto-left Portador enfermo
                td.texto-left Presenta síntomas evidentes
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Portador convaleciente
                td.texto-left Ya tuvo la enfermedad, pero aún contagia
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img140.jpg', alt="" ).m-auto
            h4.text-center Zonas críticas del cuerpo
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cavidad nasal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Boca. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Piel.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cabello. 
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img141.jpg', alt="" ).m-auto
            h4.text-center Ejemplo técnico
            .box___card_sinbordes_p
              p.mb-0.text-center Una persona puede ser portadora de #[i Staphylococcus aureus] en la piel → puede contaminar alimentos sin presentar síntomas.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img142.jpg', alt="" ).m-auto
            h4.text-center Medidas de control sanitario
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Exámenes médicos periódicos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registro de salud.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control de incapacidades.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vigilancia epidemiológica.
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Enfermedades transmisibles y su impacto en los alimentos
    p.mb-5 Las ETA (Enfermedades Transmitidas por Alimentos) son causadas principalmente por bacterias, virus y parásitos. Los aspectos fundamentales son:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Clasificación de enfermedades
                p Las enfermedades bacterianas, como las causadas por Salmonella y E. coli, se caracterizan por su rápida proliferación en los alimentos.
                p Las enfermedades virales, como la hepatitis A, presentan una alta capacidad de transmisión entre las personas.
                p.mb-0 Las enfermedades parasitarias, como las producidas por Giardia, están asociadas principalmente a condiciones de mala higiene.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img143.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Factores que favorecen transmisión
                p La transmisión de enfermedades se ve favorecida por diversos factores, entre ellos la mala higiene personal, que facilita la presencia de microorganismos en los alimentos.
                p.mb-0 Asimismo, las temperaturas inadecuadas permiten la proliferación de bacterias, mientras que la contaminación cruzada y la manipulación incorrecta aumentan el riesgo sanitario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img144.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cadena de infección
                p.mb-0 La cadena de transmisión de enfermedades inicia con un agente patógeno que se encuentra en un reservorio, generalmente una persona, y se transmite a través de vías como las manos o el aire, contaminando los alimentos que posteriormente son consumidos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img145.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impacto en la industria cárnica
                p.mb-0 Las consecuencias de una inadecuada manipulación incluyen el retiro de productos del mercado, pérdidas económicas, sanciones sanitarias y un significativo daño reputacional para la empresa.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img146.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.6 Identificación de síntomas de riesgo
    p.mb-5 El reconocimiento temprano de síntomas evita la contaminación. La clasificación es la siguiente:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Síntomas gastrointestinales (alto riesgo)
              p.mb-0 Síntomas como diarrea, vómito y dolor abdominal pueden indicar la posible presencia de patógenos intestinales, asociados generalmente al consumo de alimentos contaminados y a deficiencias en las prácticas de higiene.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img147.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img148.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Síntomas respiratorios
              p.mb-0 Síntomas como tos, estornudos y secreción nasal representan un riesgo de contaminación por gotas, ya que pueden dispersar microorganismos hacia los alimentos, superficies o utensilios durante su manipulación.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Síntomas cutáneos
              p.mb-0 La presencia de heridas, infecciones o abscesos en el manipulador representa un alto riesgo de contaminación directa, ya que pueden transferir microorganismos a los alimentos durante su manejo.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img149.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img150.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Síntomas sistémicos
              p.mb-0 La fiebre y el malestar general son signos que indican una posible infección activa, representando un riesgo para la inocuidad de los alimentos si el manipulador continúa en sus labores.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Matriz de decisión para el manipulador
              p.mb-0 Los síntomas en el manipulador de alimentos determinan el nivel de riesgo y las acciones a seguir: la diarrea y la fiebre representan un riesgo alto, requiriendo suspensión inmediata o no ingreso; las heridas cubiertas y la tos leve implican riesgo medio y exigen medidas de protección; mientras que la ausencia de síntomas corresponde a un riesgo bajo, permitiendo el trabajo normal.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img151.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img152.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Error común en la industria
              p.mb-0 “Trabajar enfermo” por presión laboral. Esto es uno de los principales factores de brotes alimentarios.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .row.align-items-center.mb-3
          .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 El protocolo ampliado de actuación incluye autoevaluación diaria, reporte inmediato de síntomas, retiro preventivo, evaluación médica, registro del caso y autorización segura para el retorno laboral.
        .caja-2.p-4(data-aos="fade-right")
          p #[b Protocolo ampliado de actuación:]
          ol.lista-ol--cuadro.mb-3
            li
              .lista-ol--cuadro__vineta
                span 1
              | 
              p.mb-0 Autoevaluación diaria.
            li
              .lista-ol--cuadro__vineta
                span 2
              | 
              p.mb-0 Reporte inmediato.
            li
              .lista-ol--cuadro__vineta
                span 3
              | 
              p.mb-0 Retiro preventivo.
            li
              .lista-ol--cuadro__vineta
                span 4
              | 
              p.mb-0  Evaluación médica.
            li
              .lista-ol--cuadro__vineta
                span 5
              | 
              p.mb-0 Registro del caso.
            li
              .lista-ol--cuadro__vineta
                span 6
              | 
              p.mb-0 Autorización de retorno.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img153.png", alt="" ).m-auto
    p.mb-5 Acto seguido, se dará paso a la integración con sistemas de inocuidad en el siguiente video. Esto permite la articulación de prácticas, controles y normativas para garantizar alimentos seguros, optimizar procesos y fortalecer la prevención de riesgos en toda la cadena productiva.
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption #[b Video]. Integración con sistemas de inocuidad.

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
