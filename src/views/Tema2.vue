<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Condiciones básicas en la fabricación de alimentos cárnicos
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img47.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las condiciones básicas en la fabricación de alimentos cárnicos son requisitos sanitarios y técnicos que garantizan la inocuidad, calidad y seguridad, regulados en Colombia por el Decreto 1500 de 2007, el Decreto 2674 de 2013 y la Resolución 240 de 2013.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Infraestructura y condiciones locativas
    p.mb-5 La infraestructura de una planta cárnica debe diseñarse para prevenir la contaminación y facilitar la limpieza, desinfección y control sanitario en todas las etapas del proceso. Los requerimientos son:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Localización y accesos
              p.mb-0 Las plantas donde fabriquen productos a base de carne deben estar ubicados en sitios libres de toda contaminación, pues ésta puede generar peligros de insalubridad y contaminación para la carne.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img48.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img49.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Diseño y construcción
              p.mb-0 La planta de transformación de productos cárnicos debe ser diseñada de manera que no permita la entrada de ningún polvo, roedores o cualquier tipo de contaminación. Las áreas de proceso deben estar bien distribuidas de manera tal que eviten la contaminación cruzada entre procedimientos.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Pisos y drenajes
              p.mb-0 Los pisos de la planta de producción de derivados cárnicos deben ser construidos en materiales no porosos e impermeables, y que no generen ningún tipo de contaminación, además deben ser de fácil limpieza y desinfección.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img50.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img51.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Paredes
              p.mb-0 Las paredes del área de producción de productos cárnicos deben ser en colores claros, resistente y de fácil limpieza y desinfección, las uniones entre las paredes deben ser de forma redondeada para así evitar la acumulación de cualquier tipo de suciedad.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Techos
              p.mb-0 Los techos deben estar diseñados de manera que no se acumule ningún tipo de suciedad ni patógenos como hongos.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img52.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img53.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Puertas
              p.mb-0 Las puertas en la planta de proceso deben ser amplias, que permitan la entrada de materias primas y la salida de desechos y productos terminados, además deben tener dispositivos de cierre automático y ajuste hermético, las superficies de éstas no deben ser para nada absorbentes y los orificios entre la puerta y el exterior deben ser lo más reducido posible para que no permita la entrada de ninguna plaga o roedores. De la recepción de materia prima al área de proceso debe haber doble puerta.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Iluminación
              p.mb-0 La iluminación de las áreas de proceso de los productos cárnicos puede ser natural o artificial, por medio de ventanas, lámparas o claraboyas, y los accesorios que cubren las lámparas deben estar protegidos para evitar que contaminen físicamente el producto si se rompen. La iluminación debe estar bien distribuida.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img54.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img55.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Ventilación
              p.mb-0 La ventilación en el área de planta de proceso de productos cárnicos debe ser adecuada para prevenir la condensación de vapor, polvo y eliminación de calor.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Equipos y utensilios en el procesamiento de carne
    p.mb-5 Los equipos son clave para la inocuidad por su contacto directo con el alimento y deben cumplir requisitos normativos y condiciones sanitarias adecuadas.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Requisitos normativos
                p.mb-0 Los equipos deben contar con un diseño higiénico, ser de fácil limpieza y desinfección, resistentes a la corrosión y no generar ningún tipo de contaminación que afecte la inocuidad del alimento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img56.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Equipos utilizados
                p.mb-0 En la industria cárnica se emplean equipos como molinos, sierras, mesas de corte, tanques y cámaras de refrigeración, esenciales para el procesamiento y conservación de la carne.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Condiciones sanitarias
                p.mb-0 Los equipos deben mantenerse bajo estrictas condiciones sanitarias, incluyendo limpieza y desinfección frecuente, mantenimiento preventivo y uso exclusivo para alimentos, con el fin de garantizar la inocuidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Materiales aptos para contacto con alimentos
    p.mb-5 Los materiales deben cumplir condiciones sanitarias estrictas para evitar contaminación. Estos son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img59.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Materiales permitidos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acero inoxidable 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Plásticos grado alimenticio 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Materiales no tóxicos 
          .row(titulo="Materiales prohibidos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Madera 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Metales oxidados 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Superficies porosas 
          .row(titulo="Importancia").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitan contaminación química 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reducen microorganismos 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantizan inocuidad 
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Relación entre desmontaje de equipos y control de contaminación
    .row.align-items-center.mb-0
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img36.svg", alt="" ).m-auto
      .col-xl
        p.mb-0 El desmontaje de equipos es fundamental dentro de los programas POES, ya que permite una limpieza profunda que elimina residuos orgánicos, reduce la carga microbiana y previene la contaminación cruzada. Este proceso incluye las etapas de desmontaje, lavado, enjuague, desinfección, secado y reensamble.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Condiciones operativas en la fabricación de alimentos cárnicos
    p.mb-5 Además de la infraestructura y equipos, la normatividad establece condiciones específicas en cada etapa del proceso. Estas se detallan a continuación:
    .bg-3
      .px-5
        .row.align-items-center.mb-5
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
              .row(titulo="A. Recepción de materias primas").ajuste-cajaAcordion
                p En esta etapa se establecen requisitos sanitarios y técnicos para asegurar la calidad inicial del producto:
                p.mb-0 #[b Requisitos sanitarios]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Inspección de calidad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Materias primas en óptimas condiciones. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ausencia de contaminación visible.
                p.mb-0 #[b Condiciones técnicas]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ficha técnica obligatoria. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pruebas de calidad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Áreas separadas de almacenamiento y proceso.
              .row(titulo="B. Control de calidad de la carne").ajuste-cajaAcordion
                p Se enfoca en garantizar condiciones adecuadas del producto:
                p.mb-0 #[b Condiciones del producto]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Baja carga microbiana. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ausencia de contaminantes químicos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    |  Condiciones higiénicas adecuadas.
              .row(titulo="C. Proceso de fabricación").ajuste-cajaAcordion
                p Incluye lineamientos generales, control de variables y métodos de conservación:
                p.mb-0 #[b Condiciones generales]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Operaciones secuenciales. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Condiciones higiénicas estrictas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de contaminación.
                p.mb-0 #[b Factores críticos de control]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Temperatura. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tiempo. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Humedad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | pH.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Actividad de agua (Aw).
                p.mb-0 #[b Métodos de conservación:]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Refrigeración. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Congelación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pasteurización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Esterilización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Deshidratación. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Ozonización. 
              .row(titulo="D. Almacenamiento").ajuste-cajaAcordion
                p Se establecen condiciones para conservar la calidad e inocuidad del producto:
                p.mb-0 #[b Condiciones sanitarias:]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de temperatura y humedad. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Limpieza de instalaciones. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Separación de productos. 
                p.mb-0 #[b Control y registros:]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registro de entradas y salidas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Trazabilidad del producto. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de productos vencidos. 
                p.mb-0 #[b Manejo de no conformes:]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Área exclusiva para devoluciones. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registro de disposición final. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Prohibición de reprocesamiento. 
                p.mb-0 #[b Almacenamiento de químicos:]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Áreas separadas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Productos rotulados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Uso restringido.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img60.png", alt="" ).m-autoas.fa-check-circle
        p.mb-5 A continuación, se presenta un cuadro resumen general que integra los aspectos clave del tema, facilitando su comprensión, organización y análisis de manera clara y estructurada.
        .row.justify-content-center
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Cuadro resumen general
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Requisito clave
                    th.texto-left Impacto en inocuidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Infraestructura
                    td.ajuste-border-tabla.texto-left Diseño sanitario
                    td.texto-left Prevención de contaminación
                  tr
                    td.ajuste-border-tabla.texto-left Equipos
                    td.ajuste-border-tabla.texto-left Limpieza y mantenimiento
                    td.texto-left Reducción de riesgos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Materiales
                    td.ajuste-border-tabla.texto-left Aptos para alimentos
                    td.texto-left Seguridad química
                  tr
                    td.ajuste-border-tabla.texto-left Procesos
                    td.ajuste-border-tabla.texto-left Control de variables
                    td.texto-left Estabilidad microbiológica
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Almacenamiento
                    td.ajuste-border-tabla.texto-left Cadena de frío
                    td.texto-left Conservación del producto
    
</template>

<script>
export default {
  name: 'Tema2',
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
