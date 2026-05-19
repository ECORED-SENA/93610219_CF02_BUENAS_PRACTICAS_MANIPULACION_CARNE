<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Prácticas higiénicas y medidas de protección (BPM)
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img81.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son procedimientos y controles que garantizan la inocuidad de los alimentos. En la carne, su aplicación es más estricta debido a su alta perecibilidad y susceptibilidad al crecimiento de microorganismos.
    p.mb-5 En este apartado se explica qué es un manipulador de alimentos, su importancia, las normas básicas de higiene y los requisitos que debe cumplir.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 ¿Qué es un manipulador de carne?
                p Un manipulador de carne es toda persona que interviene directa o indirectamente en el proceso, desde el sacrificio hasta la venta, incluyendo actividades como corte, almacenamiento, transporte y procesamiento.
                p.mb-0 Es clave en el control sanitario, ya que puede prevenir o generar contaminación; por ello, su higiene, formación y comportamiento son determinantes.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Principios generales de higiene de los alimentos
                p Los principios de higiene tienen como objetivo garantizar que los alimentos sean seguros en todas las etapas de la cadena productiva.
                p.mb-0 Son fundamentales porque previenen enfermedades transmitidas por alimentos (ETA), reducen la carga microbiana y mantienen la calidad del producto. En Colombia, están regulados por la Resolución 2674 de 2013, que establece los requisitos sanitarios para la manipulación de alimentos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Requisitos del manipulador de alimentos
                p Estos requisitos garantizan que el personal no represente riesgo sanitario.
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | 
                    p.mb-0 #[b Examen médico:] anual para verificar salud.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | 
                    p.mb-0 #[b Control en enfermedad:] retiro temporal ante síntomas.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | 
                    p.mb-0 #[b Pruebas de laboratorio:] según indicación médica.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | 
                    p.mb-0 #[b Cumplimiento de tratamientos:] obligatorio antes de reincorporarse.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img84.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 Continuando con el estudio de los requisitos, se presentan a continuación los aspectos sanitarios.
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Examen médico
              p.mb-0 Debe realizarse al menos una vez al año para verificar la ausencia de enfermedades infecciosas y el buen estado general de salud. Esto es importante, ya que muchas enfermedades pueden transmitirse a través de los alimentos sin que el manipulador lo note.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img85.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img86.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Control en caso de enfermedad
              p.mb-0 Si el trabajador presenta síntomas como fiebre, diarrea o infecciones en la piel, debe ser retirado temporalmente del proceso, con el fin de evitar la contaminación directa de los alimentos.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Pruebas de laboratorio
              p.mb-0 Las pruebas de laboratorio se realizan cuando el médico lo indique, con el fin de confirmar las condiciones sanitarias del trabajador, como en el caso de los análisis bacteriológicos.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img87.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img88.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Cumplimiento de tratamientos
              p.mb-0 El trabajador debe completar los tratamientos médicos antes de reincorporarse a sus labores, garantizando así que no exista riesgo de contagio ni afectación a la inocuidad de los alimentos.
    p.mb-5 Los requisitos de capacitación que debe cumplir el manipulador de alimentos son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img89.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Educación y capacitación").ajuste-cajaAcordion
            p.mb-3 La capacitación permite que el manipulador comprenda por qué y cómo aplicar las #[b BPM].
          .row(titulo="Características").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mínimo 10 horas al año.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Personal calificado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Enfocada al proceso productivo.
          .row(titulo="¿Qué debe incluir?").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Higiene personal.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Manejo de alimentos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de contaminación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Normatividad vigente.
          .row(titulo="Importancia").ajuste-cajaAcordion
            p.mb-3 Un trabajador capacitado no solo sigue normas, sino que entiende su impacto en la salud pública.
          .row(titulo="Plan de capacitación").ajuste-cajaAcordion
            p Debe estructurarse con:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Metodología (teórica-práctica).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cronograma.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Temas definidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evaluación.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Higiene personal del manipulador de alimentos
    p.mb-5 La higiene personal del manipulador de alimentos comprende prácticas de limpieza, hábitos saludables y uso adecuado de protección para prevenir la contaminación y garantizar la inocuidad de los alimentos. Las normas de higiene personal del manipulador de alimentos son:
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="A. Higiene corporal").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Baño diario:] elimina suciedad, sudor y microorganismos acumulados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cabello limpio y cubierto:] evita contaminación física (cabellos en el alimento).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cepillado de dientes:] reduce microorganismos en la boca.
          .row(titulo="B. Manos y uñas").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Manos limpias:] son el principal medio de transmisión de bacterias.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uñas cortas y sin esmalte:] evitan acumulación de suciedad y microorganismos.
            p Las manos pueden transportar millones de bacterias si no se lavan correctamente.
            p El lavado de manos es obligatorio antes de iniciar labores, después de ir al baño, manipular residuos, comer, cambiar de actividad o usar guantes. El secado debe realizarse únicamente con toallas desechables o secadores.
          .row(titulo="C. Vestimenta").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uniforme limpio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Color claro (facilita ver suciedad).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de delantal.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso obligatorio de elementos de protección.
            p La ropa puede transportar contaminantes desde el exterior.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img90.png", alt="" ).m-autoas.fa-check-circle
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img91.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="D. Restricciones").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No usar joyas → pueden acumular bacterias.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No maquillaje → puede caer en el alimento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No barba → retiene microorganismos.
          .row(titulo="E. Estado de salud").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No manipular alimentos enfermo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cubrir heridas.
            p Evita transmisión de patógenos.
          .row(titulo="F. Lavado de manos (explicación detallada)").ajuste-cajaAcordion
            p El lavado de manos debe durar mínimo 20 segundos e incluir:
            ol.lista-ol--cuadro.mb-3
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.fit--p-ol.mb-0 Mojar manos 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.fit--p-ol.mb-0 Aplicar jabón 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.fit--p-ol.mb-0 Frotar palma, dedos y uñas 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.fit--p-ol.mb-0 Enjuagar 
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.fit--p-ol.mb-0 Secar con toalla desechable 
            p.mb-0 #[b Momentos clave:]
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Antes de iniciar trabajo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Después de ir al baño.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Después de manipular carne cruda.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Después de tocar basura.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Después de comer.
    p.mb-0 Es la medida más efectiva para prevenir contaminación.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Uso de elementos de protección personal (EPP)
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure  
              img(src='@/assets/curso/temas/img92.png', alt='').m-auto
          .col-xl
            p Los EPP crean una barrera entre el manipulador y el alimento. A continuación, se deben los elementos:
            ul.fa-ul.estilo___ul.mb-4
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Guantes:] evitan contacto directo con el alimento.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tapabocas:] evita contaminación por saliva o estornudos.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Gorros/mallas:] evitan caída de cabello.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Botas y delantal:] protegen al trabajador y mantienen higiene.
            .row.align-items-center
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img3.svg', alt='')
              .col-xl
                p.mb-0 El uso correcto del EPP implica mantenerlo limpio, cambiarlo regularmente y recordar que no reemplaza el lavado de manos; su uso inadecuado puede generar una falsa sensación de seguridad.
        Separador
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Prevención de la contaminación cruzada
        p.mb-5 La prevención de la contaminación cruzada evita el contacto entre alimentos, superficies o utensilios contaminados, reduciendo riesgos microbiológicos y garantizando la inocuidad durante todo el proceso. Los aspectos fundamentales son:
        .bg-slider.mb-0
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Explicación detallada 
                    p Ocurre cuando microorganismos pasan de:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Un alimento crudo a uno cocido.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Una superficie contaminada a un alimento limpio.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Un utensilio a otro alimento.
                    p.mb-0 #[b Ejemplo:] cortar carne cruda y luego verduras sin lavar el cuchillo.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Principales causas
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Manipulación incorrecta.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Utensilios sucios.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | Falta de higiene.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Medidas de prevención (explicadas)
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Separar alimentos:] evita contacto entre crudos y cocidos.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Desinfección:] elimina microorganismos de superficies.
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Lavado de manos:] interrumpe la cadena de contaminación. 
                      li.mb-1
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso de utensilios exclusivos:] evita transferencias de bacterias.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Normas de comportamiento en áreas de proceso
    p.mb-5 El comportamiento del personal es clave para prevenir o generar contaminación; por ello, a continuación, se presentan las normas obligatorias y los controles de ingreso que deben cumplirse.
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-4.py-md-5(titulo="Normas obligatorias (explicadas)" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Normas obligatorias (explicadas) 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b No fumar:] evita contaminación química y biológica. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b No consumir alimentos:] reduce riesgo de contaminación cruzada. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Orden y limpieza:] disminuye acumulación de microorganismos.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cumplimiento de normas:] garantiza control sanitario.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img97.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Control de ingreso" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Control de ingreso
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Solo personal autorizado.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Visitantes con medidas de higiene.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Reduce ingreso de contaminantes externos.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img98.png', alt="" style="max-width: 450px").m-auto
    p.mb-0 Las BPM previenen enfermedades, garantizan alimentos seguros, cumplen la normatividad y protegen la salud pública; el manipulador es clave en la inocuidad.

</template>

<script>
export default {
  name: 'Tema5',
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
