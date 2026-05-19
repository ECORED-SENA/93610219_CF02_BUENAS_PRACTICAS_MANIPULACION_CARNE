export default {
  global: {
    Name:
      'Buenas Prácticas de Manufactura, Manipulación de Alimentos e Inocuidad en la Industria Cárnica',
    Description:
      'Este componente formativo aborda los principios de las Buenas Prácticas de Manufactura (BPM), así como el rol y la responsabilidad del manipulador de alimentos y las medidas de control sanitario en la industria cárnica. Incluye temas como higiene, control de plagas, manejo de residuos y sistemas de inocuidad, con el propósito de garantizar la calidad, la seguridad alimentaria y la protección de la salud del consumidor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Legislación sanitaria vigente en la industria cárnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Decreto 1500 de 2007 y su aplicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Resolución 2674 de 2013 y requisitos sanitarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Importancia de la normatividad en la inocuidad de la carne',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Relación entre normativa, equipos e inocuidad del alimento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Condiciones básicas en la fabricación de alimentos cárnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Infraestructura y condiciones locativas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Equipos y utensilios en el procesamiento de carne',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Materiales aptos para contacto con alimentos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Relación entre desmontaje de equipos y control de contaminación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Condiciones operativas en la fabricación de alimentos cárnicos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cambios en la carne y factores de alteración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cambios físicos, químicos y biológicos en los alimentos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Agentes que alteran la carne',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación entre el pH y el deterioro de la carne',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Crecimiento bacteriano y condiciones que lo favorecen',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conservación de la carne y cadena de frío',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Importancia de la cadena de frío',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Temperaturas de conservación de la carne',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Efecto de la temperatura en el crecimiento microbiano',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Manejo adecuado del almacenamiento y transporte',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Prácticas higiénicas y medidas de protección (BPM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Higiene personal del manipulador de alimentos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Uso de elementos de protección personal (EPP)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Prevención de la contaminación cruzada',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Normas de comportamiento en áreas de proceso',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Limpieza y desinfección en el área de proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Conceptos de limpieza y desinfección',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Métodos y productos utilizados',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Procedimientos y frecuencias de limpieza',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Programas de limpieza y desinfección según BPM',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Buenas Prácticas de Manufactura (BPM) en la industria cárnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto e importancia de las BPM',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Principios y fundamentos de las BPM',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Relación de las BPM con la normativa sanitaria vigente',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Aplicación de BPM en procesos de transformación cárnica',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Control de calidad e inocuidad en derivados cárnicos',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Mejora continua en procesos productivos',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Requisitos y responsabilidad del manipulador de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Rol del manipulador en la cadena de inocuidad',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Responsabilidad legal según la normativa vigente',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Ética y compromiso en la manipulación de alimentos',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Condiciones de salud del manipulador',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Enfermedades transmisibles y su impacto en los alimentos',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Identificación de síntomas de riesgo',
            hash: 't_8_6',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Control sanitario complementario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Control de plagas en la industria cárnica',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Tipos de plagas y riesgos asociados',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Manejo adecuado de residuos sólidos y líquidos',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Impacto del control sanitario en la inocuidad alimentaria',
            hash: 't_9_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
