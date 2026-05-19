<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Limpieza y desinfección en el área de proceso
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        p La limpieza y desinfección constituyen pilares fundamentales dentro de las #[b Buenas Prácticas de Manufactura (BPM)] en la industria cárnica, ya que permiten prevenir la contaminación de los alimentos, garantizar la inocuidad y proteger la salud del consumidor.
        .caja-3.ajuste-color-1(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 En esta unidad de aprendizaje se abordará de manera integral el concepto de limpieza y desinfección, incluyendo métodos, productos, procedimientos, frecuencias y programas establecidos según las BPM.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure  
          img(src='@/assets/curso/temas/img99.png', alt='').m-auto
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Conceptos de limpieza y desinfección
    p.mb-5 Limpieza y desinfección son:
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img37.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Limpieza
        p.mb-0 Proceso mediante el cual se eliminan residuos visibles como grasa, sangre, polvo y materia orgánica de superficies, equipos y utensilios, utilizando agua y detergentes.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img37.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Desinfección
        p.mb-0 Proceso posterior a la limpieza que tiene como objetivo eliminar o reducir los microorganismos presentes (bacterias, virus, hongos y esporas) mediante agentes físicos o químicos.
    p.mb-0 No puede haber desinfección efectiva sin una limpieza previa adecuada.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Métodos y productos utilizados
    .row.align-items-center.mb-5
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img36.svg", alt="" ).m-auto
      .col-xl
        p.mb-0 Los métodos y productos incluyen técnicas, detergentes y desinfectantes aplicados correctamente para eliminar suciedad y microorganismos, garantizando higiene e inocuidad alimentaria.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Métodos de limpieza
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img100.png", alt="" ).m-auto
      .col-xl(data-aos="fade-left")
        .caja-2.ajuste-caja-2.ajuste-color-2
          p Los métodos de limpieza son:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Físicos:] cepillado, raspado, arrastre con agua a presión. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Químicos:] uso de detergentes. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Combinados:] uso de acción mecánica, más detergente, más agua caliente. 
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Agentes limpiadores
    .bg-2
      .px-5
        p.mb-5 En la siguiente tabla se presentan las propiedades y descripciones de los agentes limpiadores.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Propiedades de agentes limpiadores
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Propiedad
                    th.texto-left Descripción
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left No corrosivos
                    td.texto-left No dañan superficies ni equipos
                  tr
                    td.ajuste-border-tabla.texto-left Solubilidad
                    td.texto-left Se disuelven rápidamente en agua
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Acción emulsionante
                    td.texto-left Eliminan grasas
                  tr
                    td.ajuste-border-tabla.texto-left Acción humectante
                    td.texto-left Facilitan el desprendimiento de suciedad
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left No tóxicos
                    td.texto-left No contaminan alimentos
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Métodos de desinfección
        p.mb-5 Los métodos de desinfección eliminan o reducen microorganismos en superficies y equipos, utilizando agentes físicos o químicos como calor, cloro o alcohol, para garantizar la inocuidad de los alimentos. Los utilizados son:
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.p-4.ajuste-color-2
          ol.lista-ol--cuadro.mb-3
            li
              .lista-ol--cuadro__vineta
                span A
              | 
              p.mb-0 Desinfección térmica
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Vapor a #[b 80°C].
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Agua caliente a #[b 80°C por 2 minutos].
          ol.lista-ol--cuadro.mb-3
            li
              .lista-ol--cuadro__vineta
                span B
              | 
              p.mb-0 Desinfección química
          p.mb-0 Se realiza utilizando los siguientes productos:
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img101.png", alt="" ).m-auto
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img102.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Cloro y sus compuestos ").ajuste-cajaAcordion
            p.mb-3 Este compuesto es germicida de muchos microorganismos y por lo general se utiliza en concentración de 4,5 a 5%, la dosis de aplicación varía dependiendo de lo que se quiere desinfectar.
          .row(titulo="Compuestos de amonio cuaternario").ajuste-cajaAcordion
            p.mb-3 Estas sustancias son incoloras y no tóxicas, sirven para eliminar bacterias gramnegativas. Estos compuestos no son compatibles con detergentes aniónicos.
          .row(titulo="Agentes anfóteros o tensoactivos").ajuste-cajaAcordion
            p.mb-3 Estos compuestos no son tóxicos, son desinfectantes y no corrosivos, y pierden su actividad en presencia de materia orgánica.
          .row(titulo="Fenólicos").ajuste-cajaAcordion
            p.mb-3 Este tipo de compuesto es muy utilizado para desinfectar cuartos de vestir y sanitarios, en productos como cítricos se usa difenil fenol para evitar el crecimiento de hongos, estos compuestos tienen actividad antibacterial prolongada como el yodo y el cloro.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Procedimientos y frecuencias de limpieza
    .row.align-items-center.mb-5
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/img36.svg", alt="" ).m-auto
      .col-xl
        p.mb-0 Los procedimientos y frecuencias de limpieza establecen cómo, cuándo y con qué realizar la limpieza, garantizando la eliminación de residuos y el control sanitario adecuado. Estos se detallan a continuación:
    .bg-1
      .px-5
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Procedimiento de limpieza
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p El procedimiento de limpieza describe pasos como prelavado, aplicación de detergente, enjuague y secado, asegurando la eliminación de suciedad y preparación adecuada para la desinfección.
            ol.lista-ol--cuadro.mb-3
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 Seleccionar el área a limpiar. 
              li
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 Retirar residuos gruesos. 
              li
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 Aplicar detergente. 
              li
                .lista-ol--cuadro__vineta
                  span 4
                | 
                p.mb-0 Cepillar o frotar superficies. 
              li
                .lista-ol--cuadro__vineta
                  span 5
                | 
                p.mb-0 Enjuagar con agua potable. 
              li
                .lista-ol--cuadro__vineta
                  span 6
                | 
                p.mb-0 Verificar eliminación de suciedad. 
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure  
              img(src='@/assets/curso/temas/img103.png', alt='').m-auto
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Procedimiento de desinfección
        p.mb-5 El proceso de limpieza se realiza mediante una serie de pasos organizados que garantizan la eliminación de suciedad y residuos, preparando las superficies para una adecuada desinfección. Estos son:
        .bg-carrusel
          .px-5
            .row.align-items-center.mb-5
              .col-xl-4(data-aos="fade-right")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 350px").m-auto
              .col-xl-8(data-aos="fade-left")
                SlyderF(columnas="col-lg-6 col-xl-6")
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img106.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Retiro de residuos
                    p.mb-0.text-center Recoger los residuos del proceso y cualquier suciedad, desechándolos en un recipiente adecuado.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img107.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Humectación
                    p.mb-0.text-center Aplicar agua potable sobre la superficie a limpiar.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img108.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Preparación de solución
                    p.mb-0.text-center Preparar la solución de detergente a utilizar.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img109.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Aplicación del detergente
                    p.mb-0.text-center Adicionar la solución de jabón sobre la superficie.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img110.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Restregado
                    p.mb-0.text-center Frotar la superficie con esponjas o cepillos para remover la suciedad.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img111.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Tiempo de acción
                    p.mb-0.text-center Dejar actuar el detergente por un periodo corto.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img112.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Enjuague
                    p.mb-0.text-center Retirar los residuos con abundante agua.
                  .tarjeta.color-acento-botones.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src='@/assets/curso/temas/img113.svg' style="max-width: 90px").m-auto
                    h4.mb-3.estilo-text Verificación
                    p.mb-0.text-center Comprobar que la limpieza se haya realizado correctamente.
        p.mb-5 El proceso de desinfección se realiza después de la limpieza y tiene como objetivo eliminar o reducir los microorganismos presentes en las superficies. El procedimiento es el siguiente: 
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img114.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Verificación de limpieza
            p.mb-0.text-center Se debe comprobar que la superficie a desinfectar esté completamente limpia antes de iniciar el proceso.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/temas/img114.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Preparación de la solución
            p.mb-0.text-center Luego, se prepara la solución desinfectante adecuada según las indicaciones establecidas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img114.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Aplicación del desinfectante
            p.mb-0.text-center Se aplica la solución desinfectante sobre la superficie de manera uniforme.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-8.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/img114.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Tiempo de acción
            p.mb-0.text-center Finalmente, se deja actuar la solución desinfectante durante aproximadamente cinco minutos para asegurar su efectividad.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Frecuencias de limpieza
    p.mb-5 La siguiente tabla presenta las frecuencias de limpieza por área o elemento, estableciendo momentos adecuados para garantizar higiene, prevenir contaminación y mantener condiciones sanitarias óptimas.
    .row.justify-content-center.mb-0
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 7.
          span Frecuencia de limpieza en áreas
        .tabla-a(data-aos="zoom-in")
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Área / Elemento
                th.texto-left Frecuencia
            tbody
              tr
                td.ajuste-border-tabla.texto-left Mesas de trabajo
                td.texto-left Antes, durante y después de la jornada
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Equipos
                td.texto-left Después de cada uso
              tr
                td.ajuste-border-tabla.texto-left Utensilios
                td.texto-left Después de cada uso
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Pisos
                td.texto-left Diario o cuando sea necesario
              tr
                td.ajuste-border-tabla.texto-left Paredes
                td.texto-left Semanal
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Drenajes
                td.texto-left Diario
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Programas de limpieza y desinfección según BPM
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.ajuste-caja-2.ajuste-color-2
          p Un programa de limpieza y desinfección debe incluir:
          .row.align-items-center
            .col-xl-6.mb-4.mb-lg-0
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Áreas para limpiar. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Responsables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Frecuencia. 
            .col-xl-6.mb-4.mb-lg-0
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Métodos utilizados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Productos y concentraciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Registros de control. 
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img115.png", alt="" ).m-auto
    .bg-2
      .px-5
        p.mb-5 La tabla presenta un programa de limpieza y desinfección con actividades, frecuencias y responsables, garantizando higiene, control sanitario y prevención de contaminación.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Ejemplo de programa de limpieza y desinfección
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Área
                    th.ajuste-border-tabla.texto-left Método
                    th.ajuste-border-tabla.texto-left Producto
                    th.ajuste-border-tabla.texto-left Frecuencia
                    th.texto-left Responsable
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Mesones
                    td.ajuste-border-tabla.texto-left Cepillado + enjuague
                    td.ajuste-border-tabla.texto-left Detergente + cloro
                    td.ajuste-border-tabla.texto-left Diario
                    td.texto-left Operario
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Equipos
                    td.ajuste-border-tabla.texto-left Desmontaje y lavado
                    td.ajuste-border-tabla.texto-left Detergente
                    td.ajuste-border-tabla.texto-left Después de uso
                    td.texto-left  Operario
                  tr
                    td.ajuste-border-tabla.texto-left Pisos
                    td.ajuste-border-tabla.texto-left Lavado con agua
                    td.ajuste-border-tabla.texto-left Desinfectante
                    td.ajuste-border-tabla.texto-left Diario
                    td.texto-left Auxiliar
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Drenajes
                    td.ajuste-border-tabla.texto-left Cepillado
                    td.ajuste-border-tabla.texto-left Cloro
                    td.ajuste-border-tabla.texto-left Diario
                    td.texto-left Mantenimiento
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Condiciones en el área de proceso
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img116.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el área de proceso está prohibido comer o fumar, los visitantes deben cumplir las normas establecidas y se debe mantener un estricto control sanitario del personal para garantizar la inocuidad.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Limpieza en equipos y utensilios
    .bg-3
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/img117.png", alt="" ).m-auto
          .col-xl(data-aos="fade-left")
            .caja-2.ajuste-caja-3
              p La limpieza debe ser rigurosa para evitar contaminación cruzada.
              p.mb-0 #[b Proceso general]
              ol.lista-ol--cuadro.mb-3
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.mb-0 Selección del área. 
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.mb-0 Identificación de suciedad. 
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.mb-0 Selección de detergente. 
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | 
                  p.mb-0 Aplicación de limpieza. 
                li
                  .lista-ol--cuadro__vineta
                    span 5
                  | 
                  p.mb-0 Enjuague. 
                li
                  .lista-ol--cuadro__vineta
                    span 6
                  | 
                  p.mb-0 Desinfección. 
              p.mb-0  #[b Importancia en plantas cárnicas]
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Previene enfermedades transmitidas por alimentos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Evita contaminación cruzada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Garantiza calidad e inocuidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Cumple normativa sanitaria.
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Requisitos sanitarios
        p.mb-5 En la siguiente tabla se detalla el requisito sanitario y la descripción.
        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Requisitos sanitarios
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Requisito
                    th.texto-left Descripción
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Materiales
                    td.texto-left No corrosivos
                  tr
                    td.ajuste-border-tabla.texto-left Superficies
                    td.texto-left Lisas y no porosas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Diseño
                    td.texto-left Fácil desmontaje
                  tr
                    td.ajuste-border-tabla.texto-left Uniones
                    td.texto-left Sin grietas ni roscas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Protección
                    td.texto-left Evitar contaminación externa
                  tr
                    td.ajuste-border-tabla.texto-left Mesones
                    td.texto-left Sin aristas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Recipientes
                    td.texto-left Herméticos y lavables

</template>

<script>
export default {
  name: 'Tema6',
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
