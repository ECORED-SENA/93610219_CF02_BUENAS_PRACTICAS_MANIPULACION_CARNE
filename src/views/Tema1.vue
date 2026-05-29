<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Legislación sanitaria vigente en la industria cárnica
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La inocuidad alimentaria es la condición que garantiza que un alimento no represente riesgos para la salud, al estar libre de contaminantes. En el sector cárnico es esencial, debido a la alta susceptibilidad de la carne al deterioro. Se asegura mediante controles sanitarios en toda la cadena productiva.
    .caja-3.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 En Colombia, este sistema está liderado por el Instituto Colombiano Agropecuario (ICA) y el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) y se fundamenta en lineamientos internacionales como la Organización de las Naciones Unidas para la Alimentación y la Agricultura y la Organización Mundial de la Salud. 
    .bg-1
      .px-5
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure  
              img(src='@/assets/curso/temas/img4.png', alt='').m-auto
          .col-xl
            p La regulación sanitaria actual se basa en:
            ul.fa-ul.estilo___ul.mb-4
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Decreto 1500 de 2007] y sus modificaciones (Decretos 2270 de 2012, 1282 de 2016 y actualizaciones posteriores hasta 2023). 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Decreto 2674 de 2013] (Buenas Prácticas de Manufactura – BPM). 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resolución 240 de 2013] (requisitos sanitarios para plantas de beneficio). 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resolución 242 de 2013] (inspección, vigilancia y control). 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resolución 136 de 2020] (bienestar animal en transporte y manejo). 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resolución 253 de 2020] (bienestar animal en bovinos y otras especies). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Ley 1774 de 2016] (protección y bienestar animal). 
            .row.align-items-center
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img3.svg', alt='')
              .col-xl
                p.mb-0 La “Resolución 2574” #[b no corresponde actualmente al marco principal del sistema cárnico], por lo cual se reemplaza correctamente por la #[b Resolución 240 y 242 de 2013], que sí desarrollan el Decreto 1500. 
        p.mb-5 A continuación, se explican algunos conceptos que vienen inmersos en el Decreto 1500 del 2007.
        .bg-slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Adulterado
                    p.mb-0 La carne es adulterada cuando se afecta su inocuidad por contaminantes, mala calidad, higiene deficiente u origen no autorizado.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Alterado
                    p.mb-0 Es la alteración de la carne por agentes físicos, químicos o biológicos que afectan su calidad.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img7.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Alimento perecedero
                    p.mb-0 La carne es perecedera porque se deteriora fácilmente y requiere adecuada manipulación y almacenamiento.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Canal bovina
                    p.mb-0 Se denomina canal bovina al cuerpo del animal limpio, o sea, sin piel ni extremidades.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Carne fresca
                    p.mb-0 Es la carne que no tiene proceso de maduración y se obtiene después del proceso <i>post mortem</i>.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img8.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Carne molida
                    p.mb-0 Es el producto que se obtiene después de la molienda.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img10.png', alt='' style="max-width: 500px").m-auto
    .caja-3.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 Conocer los procesos y conceptos clave de la cadena cárnica es fundamental para comprender cómo llega la carne desde el animal hasta el consumidor final. A continuación, se presentan términos esenciales.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Carne picada
                p.mb-0 Es la carne a la que se le retira el hueso y se acondiciona en cubos o en trozos.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Derivados cárnicos
                p.mb-0 Son productos obtenidos de la transformación de la carne y a los que se les ha adicionado ingredientes para mejorar sus características tecnológicas.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img15.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Faenado
                p.mb-0 Es la separación en partes y en viseras de un animal en canal.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Expendio
                p.mb-0 Es la distribución y comercialización del producto cárnico a los diferentes puntos de venta.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Inspección <i>ante mórtem</i>
                p.mb-0 Es un procedimiento que se realiza al animal antes de ser sacrificado por parte de un funcionario, el cual dictamina las condiciones de salubridad de los animales a sacrificar.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Planta de sacrificio
                p.mb-0 Es el establecimiento donde se realiza el sacrificio a los animales que son aptos para el consumo humano.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Sacrificio
                p.mb-0 Proceso que se realiza para darle muerte a un animal; inicia con la sensibilización y termina en desangrado.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Decreto 1500 de 2007 y su aplicación
    p.mb-5 El Decreto 1500 de 2007 regula la cadena cárnica en Colombia para garantizar la inocuidad desde la producción hasta el consumo y su aplicación en la cadena productiva está dada en:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img19.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Producción primaria").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control sanitario de animales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Prevención de enfermedades zoonóticas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso responsable de medicamentos veterinarios. 
          .row(titulo="Transporte de animales").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Vehículos en condiciones higiénicas y mecánicas adecuadas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar hacinamiento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No mezclar especies. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Minimizar estrés y sufrimiento.
            p.mb-3  (Regulado por Resoluciones 136 y 253 de 2020). 
          .row(titulo="Plantas de beneficio y procesamiento").ajuste-cajaAcordion
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Autorización sanitaria (INVIMA). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Implementación de BPM (Decreto 2674 de 2013). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicación de sistemas HACCP. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inspección ante y post mortem. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Métodos humanitarios de sacrificio.
            p.mb-3 (Reglamentado por Resoluciones 240 y 242 de 2013). 
    .row.align-items-center.mb-5
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
          .row(titulo="Expendio y almacenamiento").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro sanitario vigente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Control de temperatura. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantía de trazabilidad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Prevención de contaminación cruzada. 
          .row(titulo="Transporte de carne").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Vehículos refrigerados autorizados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantenimiento de cadena de frío. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Documentación sanitaria del producto. 
          .row(titulo="Empaque y etiquetado").ajuste-cajaAcordion
            p #[b Materiales inocuos.] 
            p Información obligatoria: 
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Nombre del producto. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha de beneficio. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha de vencimiento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Condiciones de conservación.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img20.png", alt="" ).m-autoas.fa-check-circle
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.ajuste-caja-2
          p La producción primaria de la carne según el decreto 1500 requiere lo siguiente:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Inscripción y certificación sanitaria de predio.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Instalaciones y áreas de producción primaria.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Condiciones de higiene.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Obligaciones sanitarias.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Plan de saneamiento.
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img21.png", alt="" ).m-auto
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Resolución 2674 de 2013 y requisitos sanitarios
    p.mb-5 Los requisitos sanitarios de la industria cárnica garantizan la inocuidad mediante el control del personal, instalaciones, procesos y bienestar animal. Estos requisitos son:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img22.jpg', alt="" ).m-auto
            h4.text-center Personal manipulador
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Capacitación certificada.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Buen estado de salud.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso obligatorio de elementos de protección personal.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img23.jpg', alt="" ).m-auto
            h4.text-center Equipos e instalaciones
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Materiales sanitarios e inocuos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Diseño higiénico.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantenimiento periódico.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img24.jpg', alt="" ).m-auto
            h4.text-center Limpieza y desinfección
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas POES.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso de desinfectantes aprobados.
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img25.jpg', alt="" ).m-auto
            h4.text-center Control de plagas
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Programas preventivos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Monitoreo permanente.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img26.jpg', alt="" ).m-auto
            h4.text-center Manejo de residuos
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Clasificación y disposición adecuada.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img27.jpg', alt="" ).m-auto
            h4.text-center Control de procesos
            .box___card_sinbordes_p
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Control de temperatura.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Supervisión continua.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de HACCP.
    p.mb-0 Los requisitos sanitarios garantizan la inocuidad mediante el control del personal, procesos, instalaciones y bienestar animal, clave para la calidad y seguridad de la carne.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Importancia de la normatividad en la inocuidad de la carne
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img28.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La normatividad sanitaria en la industria cárnica es fundamental para garantizar la inocuidad, ya que regula toda la cadena productiva con lineamientos técnicos obligatorios. Su importancia radica en el enfoque preventivo, la reducción de enfermedades, la estandarización de procesos, la responsabilidad legal y su impacto en la calidad y acceso a mercados.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Enfoque preventivo de la normatividad 
    p.mb-5 La legislación sanitaria cárnica es preventiva, controla riesgos desde el inicio y asegura la inocuidad en toda la cadena productiva. Los fundamentos del enfoque preventivo son:
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Identificación de peligros
                p Consiste en identificar los riesgos que pueden contaminar la carne durante el proceso.
                p #[b Tipos de peligros]
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Biológicos: bacterias, virus y parásitos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Químicos: residuos de medicamentos o sustancias.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Físicos: objetos como metal, vidrio o plástico.
                p.mb-0 #[b Ejemplo]: un mal eviscerado puede contaminar la carne con contenido intestinal.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evaluación del riesgo
                p Análisis de riesgos: evaluar probabilidad e impacto.
                p #[b Clasificación]: alto, medio, bajo.
                p #[b Ejemplo]: Salmonella → riesgo alto.
                p.mb-0 #[b Control]: aplicar medidas en puntos críticos del proceso.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Características de un Punto Crítico de Control (PCC)
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Es una etapa clave del proceso.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Permite controlar un peligro significativo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tiene límites definidos (ej: temperatura, tiempo).
                p.mb-0 #[b Ejemplo]: refrigeración de la canal a temperaturas menor o igual que 4°C para evitar crecimiento bacteriano.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Esquema del enfoque preventivo
                p.bm-0 El proceso consiste en identificar los peligros, evaluar los riesgos, definir los controles en puntos críticos (PCC), realizar el monitoreo continuo y, finalmente, corregir las desviaciones que se presenten.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Herramientas de implementación del enfoque preventivo
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b BPM (Buenas Prácticas de Manufactura)]: normas básicas de higiene (personal, instalaciones, agua, residuos, plagas). Previenen riesgos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b POES (Procedimientos Operativos Estandarizados de Saneamiento)]: procedimientos de limpieza y desinfección (qué, cómo, con qué, cuándo y quién). Evitan contaminación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b HACCP (Análisis de Peligros y Puntos Críticos de Control)]: sistema de control basado en riesgos (identificar, controlar, monitorear y corregir). Garantiza inocuidad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
    .bg-2
      .px-5
        p.mb-5 A continuación, se presenta un cuadro comparativo de las principales herramientas preventivas utilizadas en la industria cárnica, con el fin de facilitar su comprensión y diferenciación.
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Cuadro comparativo de herramientas preventivas
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Herramienta
                    th.ajuste-border-tabla.texto-left Enfoque
                    th.texto-left Función principal
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left BPM
                    td.ajuste-border-tabla.texto-left General
                    td.texto-left Prevención básica
                  tr
                    td.ajuste-border-tabla.texto-left POES
                    td.ajuste-border-tabla.texto-left Específico
                    td.texto-left  Limpieza y desinfección
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left HACCP
                    td.ajuste-border-tabla.texto-left Crítico
                    td.texto-left Control de riesgos clave
        p.mb-5 En planta, las BPM aseguran higiene, los POES la limpieza y el HACCP controla puntos críticos como temperatura y eviscerado.
        .caja-5.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
          .col
            h3 Articulación institucional
        .row.align-items-center.mb-5
          .col-xl-auto.d-none.d-xl-block(data-aos="fade-right")
            figure
              img(src="@/assets/curso/temas/img36.svg", alt="" ).m-auto
          .col-xl
            p.mb-0 El control sanitario en la cadena cárnica cubre todas las etapas bajo supervisión del ICA y el INVIMA, garantizando la inocuidad “de la granja a la mesa”.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Reducción de enfermedades transmitidas por alimentos (ETA)
    p.mb-5 La reducción de enfermedades transmitidas por alimentos se logra mediante control sanitario, buenas prácticas, vigilancia continua y prevención de riesgos en toda la cadena cárnica.
    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.text-white.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img37.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Acciones establecidas por la normatividad
        ul.fa-ul.estilo___ul.mb-0
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Control microbiológico.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Manejo adecuado de temperaturas.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Higiene en procesos.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img37.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Resultados en salud pública
        p.mb-0 Disminución de riesgos como #[b Salmonella, E. coli, Listeria ].
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Estandarización de procesos 
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img38.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estandarización de procesos en la industria cárnica define procedimientos uniformes para toda la cadena productiva, garantizando consistencia, reduciendo errores y asegurando la calidad e inocuidad del producto.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Responsabilidad legal
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-2.ajuste-caja-2
          p La responsabilidad legal en la industria cárnica implica el cumplimiento obligatorio de la normatividad sanitaria vigente, ya que cualquier incumplimiento puede afectar directamente la salud pública y la inocuidad de los alimentos. Las consecuencias del incumplimiento normativo son:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Sanciones económicas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Clausura del establecimiento. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Pérdida de registros sanitarios.
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/img39.png", alt="" ).m-auto
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Impacto en la inocuidad y calidad
    p.mb-5 La normatividad sanitaria asegura la inocuidad y calidad de los productos cárnicos mediante condiciones adecuadas de higiene, conservación y manejo en toda la cadena productiva. La garantía que ofrece la normatividad sanitaria está en:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img40.jpg', alt="" ).m-auto
            h4.text-center Productos libres de contaminantes 
            .box___card_sinbordes_p
              p.mb-0.text-center La implementación de controles sanitarios reduce la presencia de agentes biológicos, químicos y físicos, garantizando alimentos seguros para el consumo humano.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img41.jpg', alt="" ).m-auto
            h4.text-center Mayor vida útil
            .box___card_sinbordes_p
              p.mb-0.text-center El cumplimiento de condiciones adecuadas de higiene, conservación y cadena de frío permite prolongar el tiempo de conservación del producto sin comprometer su calidad.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-6.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img42.jpg', alt="" ).m-auto
            h4.text-center Conservación de características organolépticas
            .box___card_sinbordes_p
              p.mb-0.text-center La normatividad asegura que la carne mantenga sus propiedades sensoriales como color, olor, sabor y textura, aspectos fundamentales para la aceptación del consumidor.
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación con mercados internacionales
    .caja-1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1.fit___box_container
          p.mb-0 El cumplimiento de la normatividad en la industria cárnica ofrece importantes ventajas, como el acceso a mercados internacionales mediante exportaciones, la obtención de certificaciones sanitarias que respaldan la calidad del producto y el fortalecimiento de la competitividad en el sector.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img43.png', alt='').m-auto
    .caja-5.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img35.svg" style="max-width: 60px").m-auto
      .col
        h3 Cultura sanitaria
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img44.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La normatividad en la industria cárnica aporta significativamente al talento humano al promover la capacitación del personal, fortalecer la conciencia sobre la inocuidad de los alimentos y fomentar la responsabilidad en cada etapa de la cadena productiva.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Relación entre normativa, equipos e inocuidad del alimento
    p.mb-5 La inocuidad en la industria cárnica depende directamente de los equipos, utensilios e infraestructura, los cuales deben cumplir estrictamente con la normativa vigente, como el Decreto 2674 de 2013, la Resolución 240 de 2013 y el Decreto 1500 de 2007. A continuación, se detallará cómo se relacionan entre sí:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img45.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Diseño higiénico de equipos").ajuste-cajaAcordion
            p #[b Características exigidas por la normativa]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Superficies lisas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No porosas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Sin grietas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fácil limpieza.
            p.mb-3 Evita la acumulación de microorganismos.
          .row(titulo="Materiales aptos para contacto con alimentos").ajuste-cajaAcordion
            p #[b Materiales permitidos]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acero inoxidable.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Plásticos de grado alimenticio.
            p Materiales prohibidos
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Madera.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Metales oxidados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Materiales porosos.
          .row(titulo="Contaminación cruzada").ajuste-cajaAcordion
            p #[b Causas principales]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No limpiar equipos entre procesos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mezcla de productos crudos y procesados.
            p.mb-3 Es uno de los principales riesgos sanitarios.
          .row(titulo="Programas de limpieza y desinfección (POES)").ajuste-cajaAcordion
            p #[b Elementos que deben incluir]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Frecuencia de limpieza.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Productos químicos autorizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Métodos de desinfección.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificación.
          .row(titulo="Mantenimiento de equipos").ajuste-cajaAcordion
            p #[b Tipos de mantenimiento]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Preventivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Correctivo.
            p #[b Actividades incluidas]
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Lubricación de grado alimenticio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cambio de piezas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inspecciones.
    p.mb-5 Esta relación se evidencia en la infraestructura y los equipos utilizados en la industria cárnica, los cuales cumplen requisitos sanitarios para garantizar la inocuidad, tales como:
    .bg-3
      .px-5
        .row.align-items-center.mb-5
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img46.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Calibración de equipos").ajuste-cajaAcordion
                p #[b Equipos críticos]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Termómetros 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Balanzas 
                p #[b Importancia de la calibración]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de temperatura 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de peso 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Precisión en procesos 
              .row(titulo="Cadena de frío").ajuste-cajaAcordion
                p #[b Equipos clave]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cámaras frigoríficas 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Refrigeradores 
                p #[b Funciones sanitarias]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Evitar crecimiento microbiano 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantener inocuidad 
              .row(titulo="Impacto en la calidad del producto").ajuste-cajaAcordion
                p #[b Efectos del uso adecuado de equipos]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Reducción de contaminación 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mayor vida útil 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Estabilidad microbiológica 
              .row(titulo="Verificación y registros").ajuste-cajaAcordion
                p #[b Registros exigidos por la normativa]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Registros de limpieza 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Control de temperatura 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mantenimiento 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Listas de chequeo 
              .row(titulo="Equipos críticos en planta cárnica").ajuste-cajaAcordion
                p #[b Principales equipos]
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Molinos
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Sierras 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mesas de corte 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tanques 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Cámaras de frío 
                p.mb-3 Son considerados Puntos críticos de control (PCC) en HACCP.
        p.mb-5 Se presenta un cuadro resumen que muestra de forma clara la relación entre la normatividad sanitaria y la inocuidad en la industria cárnica, evidenciando cómo cada requisito contribuye a la calidad y seguridad de los productos.
        .row.justify-content-center
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Cuadro resumen: Relación normativa e inocuidad
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento
                    th.ajuste-border-tabla.texto-left Requisito normativo
                    th.texto-left Impacto en inocuidad
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Equipos
                    td.ajuste-border-tabla.texto-left Material sanitario
                    td.texto-left Evita contaminación
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Limpieza
                    td.ajuste-border-tabla.texto-left POES
                    td.texto-left Reduce microorganismos
                  tr
                    td.ajuste-border-tabla.texto-left Mantenimiento
                    td.ajuste-border-tabla.texto-left Programas obligatorios
                    td.texto-left Previene fallas
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cadena de frío
                    td.ajuste-border-tabla.texto-left Control de temperatura
                    td.texto-left Inhibe crecimiento bacteriano
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
