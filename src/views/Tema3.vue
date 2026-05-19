<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Cambios en la carne y factores de alteración
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La carne es altamente perecedera y su calidad depende de factores como temperatura, pH y manipulación; por ello, su control mediante BPM es clave para garantizar su inocuidad.
        .caja-3.ajuste-color-1(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 En esta unidad se analizan los cambios físicos, químicos y biológicos de los alimentos, los agentes que alteran la carne, la relación entre el pH y su deterioro, y las condiciones que favorecen el crecimiento bacteriano.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure  
          img(src='@/assets/curso/temas/img61.png', alt='').m-auto
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Cambios físicos, químicos y biológicos en los alimentos
    p.mb-5 Después del sacrificio, el músculo se transforma en carne mediante un proceso llamado conversión post mortem, que comprende una secuencia de etapas: sacrificio, rigor mortis, maduración y, finalmente, deterioro, las cuales determinan sus características y calidad. Los cambios son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img62.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Cambios físicos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aparición del rigor mortis (endurecimiento muscular por falta de ATP). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cambios en el color (de rojo púrpura a rojo brillante). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pérdida de capacidad de retención de agua (exudación). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Modificación de la textura (de rígida a más blanda durante la maduración). 
          .row(titulo="Cambios químicos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disminución del pH por acumulación de ácido láctico. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Desnaturalización de proteínas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Oxidación de lípidos (rancidez). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Formación de compuestos que influyen en sabor y aroma. 
          .row(titulo="Cambios biológicos").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acción de enzimas endógenas (proteólisis → ablandamiento). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Crecimiento de microorganismos (alterantes y patógenos). 
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Agentes que alteran la carne
    p.mb-5 El deterioro de la carne es el resultado de la interacción de diferentes agentes:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes biológicos
                p.mb-0 Los agentes biológicos incluyen bacterias, hongos y levaduras que contaminan la carne durante su manipulación o almacenamiento. Estos microorganismos provocan deterioro, generando malos olores, viscosidad y cambios de color, lo que afecta la calidad, inocuidad y vida útil del producto cárnico.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes químicos
                p.mb-0 Los agentes químicos afectan la carne mediante procesos como la oxidación de grasas, conocida como rancidez, y reacciones enzimáticas no controladas. Estos cambios alteran el sabor, olor y valor nutricional, disminuyendo la calidad del producto y favoreciendo su deterioro progresivo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes físicos
                p.mb-0 Los agentes físicos incluyen temperaturas inadecuadas, exposición a la luz, humedad y oxígeno, así como daños mecánicos durante el manejo. Estos factores aceleran el deterioro de la carne, afectan su textura, color y conservación, y favorecen el crecimiento de microorganismos indeseables.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes humanos
                p.mb-0 Los agentes humanos están relacionados con prácticas inadecuadas como la mala higiene del manipulador, la contaminación cruzada, la ruptura de la cadena de frío y la manipulación incorrecta. Estas acciones incrementan el riesgo de contaminación, comprometen la inocuidad y afectan la calidad del producto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La mala manipulación de la carne genera contaminación, favorece el crecimiento microbiano, provoca deterioro y aumenta el riesgo sanitario para el consumidor.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Relación entre el pH y el deterioro de la carne
    p.mb-5 El pH indica la calidad de la carne; al disminuir por ácido láctico, mejora la conservación, limita microorganismos y define color, textura y jugosidad.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Alteraciones del pH
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de carne
                    th.ajuste-border-tabla.texto-left Características
                    th.ajuste-border-tabla.texto-left Causa
                    th.texto-left Consecuencia
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Normal
                    td.ajuste-border-tabla.texto-left Roja, firme, jugosa
                    td.ajuste-border-tabla.texto-left pH adecuado
                    td.texto-left Buena calidad
                  tr
                    td.ajuste-border-tabla.texto-left DFD
                    td.ajuste-border-tabla.texto-left Oscura, firme, seca
                    td.ajuste-border-tabla.texto-left Estrés previo
                    td.texto-left Mayor proliferación bacteriana
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left PSE
                    td.ajuste-border-tabla.texto-left Pálida, blanda, exudativa
                    td.ajuste-border-tabla.texto-left Estrés agudo
                    td.texto-left Pérdida de agua
        p.mb-5.text-center La relación pH y deterioro es la siguiente:
        .row.justify-content-center.mb-0
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .caja-6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img67.jpg', alt="" ).m-auto
                h4.text-center  pH alto (>6.0)
                .box___card_sinbordes_p
                  p.mb-0.text-center  Mayor crecimiento microbiano y menor vida útil.
          .col-xl-4.col-md-9(data-aos="fade-left")
            .caja-6.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/temas/img68.jpg', alt="" ).m-auto
                h4.text-center pH normal
                .box___card_sinbordes_p
                  p.mb-0.text-center Mayor estabilidad y mejor conservación.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Crecimiento bacteriano y condiciones que lo favorecen
    p.mb-5 Los microorganismos son la principal causa de deterioro en la carne, y su control depende de la temperatura: crecen entre 5 °C y 60 °C, y se inhiben con refrigeración o congelación. Los factores que favorecen el crecimiento se presentan en la siguiente tabla:
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Factores que favorecen el crecimiento microbiano
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Factor
                    th.texto-left Efecto
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Temperatura
                    td.texto-left Aumenta la multiplicación
                  tr
                    td.ajuste-border-tabla.texto-left Humedad
                    td.texto-left Favorece el desarrollo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Nutrientes
                    td.texto-left La carne es altamente nutritiva
                  tr
                    td.ajuste-border-tabla.texto-left Oxígeno
                    td.texto-left Determina el tipo de microorganismo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tiempo
                    td.texto-left Incrementa la carga bacteriana
        p.mb-5 Las fases del crecimiento bacteriano son:
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img19.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Fase de latencia").ajuste-cajaAcordion
                p.mb-3 Es el periodo inicial en el que los microorganismos se adaptan al nuevo ambiente. No hay aumento significativo en su número, pero sí una intensa actividad metabólica preparatoria.
              .row(titulo="Fase logarítmica").ajuste-cajaAcordion
                p.mb-3 Corresponde al crecimiento exponencial de los microorganismos, donde se multiplican rápidamente en condiciones favorables, aumentando de forma acelerada su población.
              .row(titulo="Fase estacionaria").ajuste-cajaAcordion
                p.mb-3 En esta etapa, el crecimiento se estabiliza, ya que la cantidad de microorganismos que nacen es igual a la que muere, debido a la disminución de nutrientes y acumulación de desechos.
              .row(titulo="Fase de muerte").ajuste-cajaAcordion
                p.mb-3 Se presenta cuando las condiciones son desfavorables, provocando que la muerte de microorganismos supere su reproducción, lo que genera una disminución progresiva de la población.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.ajuste-caja-2
          p La cadena de frío es esencial, ya que su mal manejo favorece el crecimiento microbiano; junto con las BPM, garantiza la inocuidad del producto. La correcta aplicación de las BPM permite:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Reducir el crecimiento microbiano. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Prolongar la vida útil del producto. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Garantizar la inocuidad alimentaria. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Proteger la salud pública. 
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img69.png", alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
