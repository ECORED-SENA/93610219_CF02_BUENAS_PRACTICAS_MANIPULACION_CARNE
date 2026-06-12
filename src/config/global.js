export default {
  global: {
    Name:
      'Buenas prácticas de manufactura, manipulación de alimentos e inocuidad en la industria cárnica',
    Description:
      'Este componente formativo aborda los principios de las buenas prácticas de manufactura (BPM), así como el rol y la responsabilidad del manipulador de alimentos y las medidas de control sanitario en la industria cárnica. Incluye temas como higiene, control de plagas, manejo de residuos y sistemas de inocuidad, con el propósito de garantizar la calidad, la seguridad alimentaria y la protección de la salud del consumidor.',
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
        titulo: 'Buenas prácticas de manufactura (BPM) en la industria cárnica',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/93610219_CF02_DU.pdf',
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
      termino: 'Agentes patógenos',
      significado:
        'microorganismos (bacterias, virus, hongos o parásitos) capaces de causar enfermedades.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'conjunto de normas y procedimientos que aseguran la higiene y calidad en la producción de alimentos.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'transferencia de microorganismos o sustancias contaminantes de un alimento o superficie a otro, generalmente por contacto directo o indirecto.',
    },
    {
      termino: 'Control sanitario',
      significado:
        'conjunto de medidas aplicadas para prevenir, eliminar o reducir riesgos que afecten la inocuidad de los alimentos.',
    },
    {
      termino: 'Desinfección',
      significado:
        'proceso mediante el cual se eliminan o reducen microorganismos patógenos en superficies o equipos.',
    },
    {
      termino: 'HACCP (Análisis de Peligros y Puntos Críticos de Control)',
      significado:
        'sistema preventivo que identifica, evalúa y controla los peligros significativos para la inocuidad alimentaria.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'condición que garantiza que los alimentos no causarán daño al consumidor cuando se preparen y consuman de acuerdo con su uso previsto.',
    },
    {
      termino: 'Limpieza',
      significado:
        'eliminación de suciedad visible, grasa y residuos orgánicos de superficies y utensilios.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'persona que interviene directamente en la preparación, procesamiento, almacenamiento o distribución de alimentos.',
    },
    {
      termino: 'Plagas',
      significado:
        'organismos como insectos o roedores que pueden contaminar los alimentos y transmitir enfermedades.',
    },
    {
      termino: 'POES (Procedimientos Operativos Estandarizados de Saneamiento)',
      significado:
        'protocolos documentados que describen las actividades de limpieza y desinfección en un establecimiento.',
    },
    {
      termino: 'Residuos líquidos',
      significado:
        'desechos en estado líquido provenientes de procesos de limpieza o producción de alimentos.',
    },
    {
      termino: 'Residuos sólidos',
      significado:
        'desechos sólidos generados durante la manipulación o procesamiento de alimentos, como restos orgánicos o empaques.',
    },
    {
      termino: 'Temperatura de almacenamiento',
      significado:
        'condición térmica controlada en la cual se conservan los alimentos para evitar el crecimiento microbiano.',
    },
    {
      termino: 'Zoonosis',
      significado:
        'enfermedades que pueden transmitirse de los animales a los seres humanos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bravo, F. (2012). Manejo higiénico de los alimentos. Editorial Limusa.',
      link: '',
    },
    {
      referencia:
        'Codex Alimentarius Commission. (2020). General principles of food hygiene (CXC 1-1969). FAO/WHO.',
      link: 'https://www.fao.org/fao-who-codexalimentarius/',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 136 de 2020: Bienestar animal en el transporte.',
      link: 'https://www.ica.gov.co/',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s.f.). Buenas prácticas ganaderas (BPG).',
      link: 'https://www.ica.gov.co/',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2013). Resolución 2674 de 2013.',
      link: 'https://www.invima.gov.co/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 2674 de 2013: Requisitos sanitarios para alimentos.',
      link: 'https://www.minsalud.gov.co/',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2022). Cinco claves para la inocuidad de los alimentos.',
      link: 'https://www.who.int/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2021). Inocuidad de los alimentos.',
      link: 'https://www.fao.org/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06.<br>Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martnez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
