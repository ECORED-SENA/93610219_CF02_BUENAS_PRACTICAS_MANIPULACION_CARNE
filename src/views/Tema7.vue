<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Buenas prácticas de manufactura (BPM) en la industria cárnica
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img118.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las buenas prácticas de manufactura (BPM) constituyen el conjunto de normas, procedimientos y condiciones higiénico-sanitarias que garantizan la producción de alimentos inocuos, especialmente en productos de alto riesgo como la carne y sus derivados.
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Concepto e importancia de las BPM
    p.mb-5 En este apartado se presentará el concepto de las BPM y su importancia, destacando su papel en la inocuidad alimentaria, la prevención de riesgos y la salud pública.
    TabsB.color-acento-contenido(data-aos="zoom-in").mb-0
      .py-4.py-md-5(titulo="Concepto" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Concepto
            p.mb-0 Las BPM son un sistema preventivo que asegura que los alimentos se produzcan, manipulen, procesen y almacenen en condiciones sanitarias adecuadas, minimizando riesgos de contaminación.
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img119.png', alt="" style="max-width: 450px").m-auto
      .py-4.py-md-5(titulo="Importancia" :icono="require('@/assets/curso/temas/img96.svg')")
        .row.align-items-center
          .col-xl-6.order-1.mb-4.mb-lg-0.p-5
            h4 Importancia
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Previenen enfermedades transmitidas por alimentos (ETA). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantizan la inocuidad del producto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aumentan la vida útil de los alimentos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejoran la calidad y aceptación del producto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten cumplir requisitos legales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitan el acceso a mercados. 
          .col-lg-6.mb-4.mb-md-0.order-2
            figure
              img(src='@/assets/curso/temas/img120.png', alt="" style="max-width: 450px").m-auto
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Principios y fundamentos de las BPM
    p.mb-5 Las BPM se fundamentan en la prevención de riesgos mediante el control de factores que pueden contaminar los alimentos. Los principios básicos y fundamentos son:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Principios básicos
                ol.lista-ol--cuadro.mb-0
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    | 
                    p.mb-0 Higiene del personal 
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | 
                    p.mb-0 Limpieza y desinfección 
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | 
                    p.mb-0 Control de plagas 
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | 
                    p.mb-0 Manejo de residuos 
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | 
                    p.mb-0 Control de materias primas 
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    | 
                    p.mb-0 Condiciones locativas adecuadas 
                  li 
                    .lista-ol--cuadro__vineta
                      span 7
                    | 
                    p.mb-0 Control de procesos 
                  li 
                    .lista-ol--cuadro__vineta
                      span 8
                    | 
                    p.mb-0 Almacenamiento adecuado 
                  li 
                    .lista-ol--cuadro__vineta
                      span 9
                    | 
                    p.mb-0 Transporte higiénico 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img121.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Importancia
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Previenen enfermedades transmitidas por alimentos (ETA). 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantizan la inocuidad del producto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aumentan la vida útil de los alimentos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejoran la calidad y aceptación del producto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permiten cumplir requisitos legales. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitan el acceso a mercados. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img122.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fundamentos de las BPM
                p.mb-0 La industria cárnica se fundamenta en la prevención para evitar la contaminación, el control mediante el monitoreo de procesos, la higiene con limpieza constante, la capacitación del personal y la documentación para garantizar trazabilidad y control.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img123.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Relación de las BPM con la normativa sanitaria vigente
    .row.align-items-center.mb-0
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img36.svg", alt="" ).m-auto
      .col-xl
        p.mb-0 Las BPM en Colombia están reguladas por normas como la Resolución 2674 de 2013, el Decreto 1500 de 2007, la Resolución 240 de 2013 y la Ley 9 de 1979, que exigen higiene, infraestructura adecuada, control de procesos, registros verificables y personal capacitado.
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Aplicación de BPM en procesos de transformación cárnica
    p.mb-5 Las BPM deben aplicarse en todas las etapas del proceso productivo, de la siguiente manera:
    .row.justify-content-center.mb-0
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Recepción de materia prima
              p.mb-0 En esta etapa se realiza la inspección sanitaria y el control de temperatura, junto con la verificación de calidad, garantizando que la materia prima cumpla las condiciones adecuadas para su procesamiento.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img124.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img125.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Almacenamiento
              p.mb-0 Se asegura una refrigeración adecuada y la separación de productos, manteniendo condiciones óptimas que eviten la contaminación y preserven la calidad.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Procesamiento
              p.mb-0 Incluye manipulación higiénica, uso de equipos limpios, control de temperatura y adecuada higiene de utensilios durante actividades como el corte.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img126.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img127.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Empaque
              p.mb-0 Se utilizan materiales aptos para alimentos y un sellado adecuado, evitando la contaminación del producto.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Distribución
              p.mb-0 Se garantiza la cadena de frío y un transporte higiénico, manteniendo la calidad e inocuidad del producto hasta su destino final.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img128.png', alt='' style="width: 300px").m-auto
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Control de calidad e inocuidad en derivados cárnicos
    p.mb-5 El control de calidad asegura que los productos cumplan con estándares físicos, químicos y microbiológicos. Los aspectos fundamentales son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img129.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Elementos del control de calidad").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inspección de materias primas 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de temperatura 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Análisis microbiológicos 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificación de procesos 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de vida útil 
          .row(titulo="Parámetros de control").ajuste-cajaAcordion
            p.mb-3 El control de calidad en alimentos incluye diferentes tipos de evaluación: el control físico analiza características como color y textura; el químico evalúa parámetros como pH y humedad; el microbiológico detecta la presencia de bacterias; y el sensorial examina olor y sabor.
          .row(titulo="Inocuidad alimentaria").ajuste-cajaAcordion
            p La inocuidad implica que el alimento no cause daño al consumidor. Se logra mediante:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | BPM. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | POES (Procedimientos Operativos Estandarizados de Saneamiento). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sistema HACCP (Análisis de Peligros y Puntos Críticos de Control). 
    Separador
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.6 Mejora continua en procesos productivos
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.ajuste-caja-2
          p La mejora continua es un enfoque que busca optimizar los procesos productivos de manera permanente. Los elementos clave son: 
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evaluación constante 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Identificación de fallas 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Implementación de acciones correctivas 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Capacitación continua 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Innovación tecnológica 
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img130.png", alt="" ).m-auto
    .bg-3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .caja-2.p-5.ajuste-color-2
              p En la siguiente tabla se presenta el ciclo de mejora continua (PHVA), una metodología que permite optimizar procesos mediante la planificación, ejecución, verificación y acción, garantizando el control, la evaluación de resultados y la mejora continua.
              .row.justify-content-center.mb-0
                .col-xl-6
                  p.mb-5 
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Tabla 10.
                    span Ciclo de mejora continua (PHVA)
                  .tabla-a(data-aos="zoom-in")
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Fase
                          th.texto-left Descripción
                      tbody
                        tr
                          td.ajuste-border-tabla.texto-left Planear
                          td.texto-left  Definir objetivos
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Hacer
                          td.texto-left Ejecutar procesos
                        tr
                          td.ajuste-border-tabla.texto-left Verificar
                          td.texto-left  Evaluar resultados
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left Actuar
                          td.texto-left Implementar mejoras
        .row.justify-content-center.mb-0
          .col-xl-8
            p.mb-5 La tabla a continuación ilustra un ejemplo de mejora continua, evidenciando la aplicación del ciclo PHVA para optimizar procesos, corregir desviaciones y fortalecer la calidad.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 11.
              span Ejemplo de mejora continua
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Problema
                    th.ajuste-border-tabla.texto-left Acción correctiva
                    th.texto-left Resultado esperado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Contaminación cruzada
                    td.ajuste-border-tabla.texto-left Capacitación
                    td.texto-left  Reducción de riesgo
                  tr
                    td.ajuste-border-tabla.texto-left Fallas en limpieza
                    td.ajuste-border-tabla.texto-left Ajuste de POES
                    td.texto-left Mayor higiene
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Temperatura inadecuada
                    td.ajuste-border-tabla.texto-left Control riguroso
                    td.texto-left Conservación adecuada 

</template>

<script>
export default {
  name: 'Tema7',
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
