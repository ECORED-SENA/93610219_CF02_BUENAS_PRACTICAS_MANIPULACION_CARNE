<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .caja-1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 El presente curso desarrolla los fundamentos técnicos de las Buenas Prácticas de Manufactura (BPM) aplicadas a la industria cárnica, con énfasis en la inocuidad alimentaria como eje central del control sanitario y la protección de la salud pública. Se abordan los principios normativos que regulan la producción, procesamiento y comercialización de productos cárnicos, alineados con la legislación sanitaria vigente.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
    .row.justify-content-center.align-items-center
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure  
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
      .col-xl
        .row.mb-3
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.svg', alt='')
          .col-xl
            p.mb-0 Durante el desarrollo del componente, se analizan aspectos críticos del proceso productivo, tales como la manipulación higiénica de los alimentos, la responsabilidad del talento humano, las condiciones higiénico-sanitarias de las instalaciones, el control integrado de plagas y el manejo adecuado de residuos. Estos elementos se articulan como factores determinantes para la prevención de la contaminación y el aseguramiento de la calidad.
        .caja-2.p-4(data-aos="fade-left")
          p.mb-0 Asimismo, se incorporan sistemas de gestión de inocuidad, como el HACCP, orientados a la identificación, evaluación y control de peligros en puntos críticos del proceso. El curso tiene como propósito fortalecer las competencias del aprendiz en la aplicación de prácticas seguras, el cumplimiento de la normatividad sanitaria y la implementación de procesos productivos eficientes, sostenibles y enfocados en la protección del consumidor.

</template>

<script>
export default {
  name: 'Introduccion',
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
