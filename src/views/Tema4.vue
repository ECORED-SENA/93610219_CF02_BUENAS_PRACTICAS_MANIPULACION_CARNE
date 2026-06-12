<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Conservación de la carne y cadena de frío
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img70.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La conservación de la carne es esencial para evitar su deterioro y proteger la salud del consumidor. La #[b cadena de frío] permite controlar la temperatura en todas las etapas, mientras que el #[b bienestar animal] influye en la calidad final del producto.
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Importancia de la cadena de frío
    p.mb-5 En el siguiente pódcast se profundizará en la importancia de la cadena de frío en la industria cárnica.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-7(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img71.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="La cadena de frío en la industria cárnica: clave para la inocuidad y la calidad"
              :audio="require('@/assets/curso/podcast/podcast.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img72.png" ).m-auto
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Temperaturas de conservación de la carne
    p.mb-5 El control de temperatura es el principal factor para evitar el deterioro de la carne. Estos son:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img73.jpg', alt="" ).m-auto
            h4.text-center  Refrigeración (0 °C a 4 °C)
            .box___card_sinbordes_p
              p.mb-0.text-center Disminuye la actividad bacteriana sin congelar el producto.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img74.jpg', alt="" ).m-auto
            h4.text-center Congelación (-18 °C o menor)
            .box___card_sinbordes_p
              p.mb-0.text-center Detiene casi por completo el crecimiento microbiano.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img75.jpg', alt="" ).m-auto
            h4.text-center Zona de peligro (5 °C - 60 °C)
            .box___card_sinbordes_p
              p.mb-0.text-center En este rango las bacterias se multiplican rápidamente, aumentando el riesgo sanitario.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Efecto de la temperatura en el crecimiento microbiano
    .caja-1.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 La temperatura influye directamente en la velocidad de crecimiento de los microorganismos: a bajas temperaturas se reduce su metabolismo y se retrasa el deterioro, mientras que a altas temperaturas se favorece su rápida multiplicación y la descomposición. Este proceso también depende de factores como el tiempo, la humedad y el oxígeno, que pueden incrementar el riesgo de contaminación.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img76.png', alt='').m-auto
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Manejo adecuado del almacenamiento y transporte
    p.mb-5 El manejo adecuado del almacenamiento y transporte garantiza la inocuidad y calidad de la carne, al mantener la cadena de frío y prevenir la contaminación. Los componentes del manejo en la cadena cárnica son:
    .bg-slider
      .px-5
        .ajuste-slider-pasos(data-aos="zoom-in")
          PasosB.color-acento-contenido
            .row.align-items-center(titulo="Paso 1")
              .col-xl-6.fit___pasos_contenido__img.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 400px").m-auto
              .col-xl-6.fit___pasos_contenido
                h4 Almacenamiento
                p El almacenamiento adecuado evita la contaminación y prolonga la vida útil del producto. Las buenas prácticas de almacenamiento de la carne son:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Mantener cadena de frío:] evita cambios bruscos de temperatura que dañan la carne.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Separar carne cruda:] previene contaminación cruzada con otros alimentos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Usar recipientes limpios:] reduce la presencia de microorganismos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Aplicar sistema PEPS:] permite usar primero los productos más antiguos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Controlar humedad y ventilación]: evita proliferación de bacterias y hongos.
            .row.align-items-center(titulo="Paso 2")
              .col-xl-6.fit___pasos_contenido__img.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 400px").m-auto
              .col-xl-6.fit___pasos_contenido
                h4 Transporte
                p El transporte es crítico porque puede romper la cadena de frío si no se controla adecuadamente. Los requisitos para el transporte correcto son:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Vehículos refrigerados:] mantienen la temperatura adecuada durante el traslado.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Limpieza y desinfección:] evitan contaminación del producto.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Protección externa:] impide contacto con polvo, insectos o suciedad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Control de temperatura:] permite verificar que no se alteren las condiciones.
            .row.align-items-center(titulo="Paso 3")
              .col-xl-6.fit___pasos_contenido__img.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/img79.png', alt='' style="max-width: 400px").m-auto
              .col-xl-6.fit___pasos_contenido
                h4 Bienestar animal en el transporte
                p El manejo del animal antes del sacrificio influye directamente en la calidad de la carne. Las condiciones adecuadas son:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evitar estrés:] reduce alteraciones en el pH de la carne.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Evitar golpes:] previene hematomas y pérdidas de calidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b No hacinamiento:] permite movilidad y reduce lesiones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ventilación adecuada:] evita sobrecalentamiento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Acceso a agua:] mantiene el estado fisiológico del animal.
            .row.align-items-center(titulo="Paso 4")
              .col-xl-6.fit___pasos_contenido__img.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/img80.png', alt='' style="max-width: 400px").m-auto
              .col-xl-6.fit___pasos_contenido
                h4 Control en el proceso cárnico
                p El control se realiza en las siguientes etapas:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Recepción:] se verifica que la materia prima cumpla condiciones sanitarias y de calidad.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Procesamiento:] se controlan variables como temperatura, pH y actividad de agua para evitar contaminación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Almacenamiento:] se mantiene el producto en condiciones adecuadas y con registros de control.

</template>

<script>
export default {
  name: 'Tema4',
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
