// ===================================
// Sistema de Traducciones - Administración Online
// ===================================

const translations = {
    es: {
        // Navegación
        nav: {
            inicio: "Inicio",
            nosotros: "Nosotros",
            servicios: "Servicios",
            administracion: "La Administración",
            comoTrabajamos: "Cómo trabajamos",
            contacto: "Contacto"
        },

        // Buscador
        search: {
            placeholder: "Buscar...",
            noResults: "No se encontraron resultados para",
            suggestion: "Intenta con otros términos como: padrón, certificado, teléfono..."
        },

        // Hero Slider
        hero: {
            slide1Title: "Realizamos tus trámites",
            slide1Text: "Presentamos y gestionamos los trámites por ti ante la administración",
            slide2Title: "Todo gestionado online",
            slide2Text: "Sin desplazamientos y pérdida de tiempo. Gestionamos todo en línea.",
            slide3Title: "Administración local, autonómica y central",
            slide3Text: "Te ayudamos con tus gestiones con el Ayuntamiento, Catastro, Diputaciones, ...",
            slide4Title: "Pago de tasas y tributos",
            slide4Text: "Pagamos las tasas y tributos que te soliciten por ti, todo online y sin desplazamientos.",
            btnServicios: "Ver Servicios",
            btnAdministracion: "La Administración"
        },

        // Sección Nosotros
        nosotros: {
            title: "Nosotros",
            subtitle: "Especialistas representando a particulares, profesionales y empresas en trámites y gestiones con la Administración",
            quienesSomos: "¿Quiénes somos?",
            texto1: "Somos una empresa especializada en la gestión de trámites y procedimientos administrativos. Representamos a particulares, profesionales y empresas ante la Administración local, autonómica y central, ocupándonos de todas las gestiones necesarias para que nuestros clientes puedan centrarse en su actividad principal.",
            texto2: "Nuestro compromiso es ofrecer un servicio profesional, ágil y eficiente que permita a nuestros clientes ahorrar tiempo y recursos. Conocemos los procedimientos administrativos y trabajamos para que cada trámite se resuelva de forma correcta y en el menor plazo posible.",
            stat1: "Trámites disponibles",
            stat2: "Oficinas",
            stat3: "Documentos presentados",
            stat4: "Clientes satisfechos"
        },

        // Sección Servicios
        servicios: {
            title: "Servicios",
            subtitle: "Soluciones a particulares, profesionales y empresas con los trámites de la Administración",
            servicio1: "Trámites y gestiones online",
            servicio2: "Pago de tasas e impuestos",
            servicio3: "Trámites y gestiones en persona"
        },

        // Sección La Administración
        logistica: {
            title: "La Administración",
            subtitle: "Trámites, gestiones, tasas e impuestos que se realizan dependiendo del órgano competente.",
            local: "Administración Local",
            localDesc: "Trámites, gestiones y pagos con el Ayuntamiento y empresas locales",
            autonomica: "Administración Autonómica",
            autonomicaDesc: "Trámites, gestiones y pagos con Diputaciones, Órganos autonómicos y empresas provinciales.",
            central: "Administración Central",
            centralDesc: "Trámites, gestiones y pagos con Catastro y Organismos estatales",
            btnVerMas: "Ver más"
        },

        // Sección Cómo trabajamos
        comoTrabajamos: {
            title: "Cómo trabajamos",
            subtitle: "Pasos que seguimos cuando realizamos un trámite o gestión a un cliente con la Administración local, autonómica o central",
            paso1: "1. Comunicación",
            paso1Desc: "con el cliente vía Teléfono, Whatsapp, Email o Formulario",
            paso2: "2. Análisis",
            paso2Desc: "de las necesidades del cliente y entrega de oferta",
            paso3: "3. Pago",
            paso3Desc: "del servicio y solicitud de documentos",
            paso4: "4. Entrega y firma",
            paso4Desc: "de documentos por parte del cliente",
            paso5: "5. Presentación",
            paso5Desc: "del trámite, documentos y seguimiento",
            paso6: "6. Entrega",
            paso6Desc: "de documentación al cliente y cierre del expediente"
        },

        // Sección Contacto
        contacto: {
            title: "Contacto",
            subtitle: "Estamos aquí para ayudarte",
            nombre: "Nombre completo",
            email: "Email",
            mensaje: "Mensaje",
            terminos: "Acepto la política de privacidad y los términos de uso",
            btnEnviar: "Enviar mensaje",
            telefono: "Teléfono",
            whatsapp: "WhatsApp",
            direccion: "Dirección",
            horario: "Horario",
            horarioTexto: "Lunes a Viernes",
            direccionTexto: "Calle Manantial 13, Planta 1, Oficina 163<br>Edificio CEEI - 11500 El Puerto de Santa María<br>Cádiz, España"
        },

        // Footer
        footer: {
            descripcion: "Trámites y gestiones con la administración para particulares y empresas.",
            contacto: "Contacto",
            legal: "Legal",
            siguenos: "Síguenos",
            politicaSeguridad: "Política de Seguridad",
            politicaPrivacidad: "Política de Privacidad",
            terminosCondiciones: "Términos y Condiciones",
            copyright: "© 2026 DOYR CAPITAL S.L. Todos los derechos reservados."
        },

        // Breadcrumbs y navegación
        breadcrumb: {
            inicio: "Inicio",
            laAdministracion: "La Administración",
            administracionLocal: "Administración Local"
        },

        // Botones comunes
        buttons: {
            volver: "Volver",
            volverAdmin: "Volver a La Administración",
            volverLocal: "Volver a Administración Local",
            contactarWhatsapp: "Contactar por WhatsApp",
            llamarAhora: "Llamar ahora",
            formularioContacto: "Formulario de contacto"
        },

        // Página Administración Local
        adminLocal: {
            title: "Administración Local",
            subtitle: "Trámites, gestiones y pagos con el Ayuntamiento y empresas locales",
            tramite1: "Alta en el Padrón por Cambio de Residencia",
            tramite1Desc: "Inscripción en el padrón municipal cuando te mudas desde otro municipio.",
            tramite2: "Baja en el Padrón por Traslado",
            tramite2Desc: "Información sobre la baja padronal cuando te trasladas a otro municipio.",
            tramite3: "Cambio de Domicilio dentro del Municipio",
            tramite3Desc: "Actualización de tu dirección en el padrón sin cambiar de municipio.",
            tramite4: "Cambio de Titularidad del Agua",
            tramite4Desc: "Gestión del cambio de titular del contrato de suministro de agua.",
            tramite5: "Certificado de Convivencia / Unidad Familiar",
            tramite5Desc: "Documento que acredita quién está empadronado en tu domicilio.",
            tramite6: "Consulta de Datos Padronales Online",
            tramite6Desc: "Cómo consultar y descargar tu información padronal en sede electrónica.",
            tramite7: "Declaración Responsable y Comunicación Previa",
            tramite7Desc: "Trámites para obras, aperturas y actividades sin licencia clásica.",
            tramite8: "Modificación de Datos Personales en el Padrón",
            tramite8Desc: "Rectificación de errores o actualización de datos en tu inscripción padronal.",
            tramite9: "Renovación de Inscripción Padronal (Extranjeros)",
            tramite9Desc: "Confirmación periódica de residencia para extranjeros en el padrón.",
            tramite10: "Volante o Certificado de Empadronamiento",
            tramite10Desc: "Obtención del volante o certificado que acredita tu residencia en el municipio."
        }
    },

    en: {
        // Navigation
        nav: {
            inicio: "Home",
            nosotros: "About Us",
            servicios: "Services",
            administracion: "Administration",
            comoTrabajamos: "How We Work",
            contacto: "Contact"
        },

        // Search
        search: {
            placeholder: "Search...",
            noResults: "No results found for",
            suggestion: "Try other terms like: registration, certificate, phone..."
        },

        // Hero Slider
        hero: {
            slide1Title: "We handle your procedures",
            slide1Text: "We submit and manage administrative procedures on your behalf",
            slide2Title: "Everything managed online",
            slide2Text: "No travel or wasted time. We handle everything online.",
            slide3Title: "Local, regional and central administration",
            slide3Text: "We help you with your dealings with the City Council, Land Registry, Provincial Councils...",
            slide4Title: "Payment of fees and taxes",
            slide4Text: "We pay the fees and taxes required on your behalf, all online and without travel.",
            btnServicios: "View Services",
            btnAdministracion: "Administration"
        },

        // About Us Section
        nosotros: {
            title: "About Us",
            subtitle: "Specialists representing individuals, professionals and companies in procedures and dealings with the Administration",
            quienesSomos: "Who are we?",
            texto1: "We are a company specialized in the management of administrative procedures and processes. We represent individuals, professionals and companies before the local, regional and central Administration, taking care of all the necessary steps so that our clients can focus on their main activity.",
            texto2: "Our commitment is to offer a professional, agile and efficient service that allows our clients to save time and resources. We know the administrative procedures and work to ensure that each process is resolved correctly and in the shortest possible time.",
            stat1: "Available procedures",
            stat2: "Offices",
            stat3: "Documents submitted",
            stat4: "Satisfied clients"
        },

        // Services Section
        servicios: {
            title: "Services",
            subtitle: "Solutions for individuals, professionals and companies with Administration procedures",
            servicio1: "Online procedures and management",
            servicio2: "Payment of fees and taxes",
            servicio3: "In-person procedures and management"
        },

        // Administration Section
        logistica: {
            title: "Administration",
            subtitle: "Procedures, management, fees and taxes carried out depending on the competent body.",
            local: "Local Administration",
            localDesc: "Procedures, management and payments with the City Council and local companies",
            autonomica: "Regional Administration",
            autonomicaDesc: "Procedures, management and payments with Provincial Councils, Regional Bodies and provincial companies.",
            central: "Central Administration",
            centralDesc: "Procedures, management and payments with the Land Registry and State Bodies",
            btnVerMas: "See more"
        },

        // How We Work Section
        comoTrabajamos: {
            title: "How We Work",
            subtitle: "Steps we follow when we carry out a procedure or management for a client with the local, regional or central Administration",
            paso1: "1. Communication",
            paso1Desc: "with the client via Phone, WhatsApp, Email or Form",
            paso2: "2. Analysis",
            paso2Desc: "of the client's needs and delivery of quote",
            paso3: "3. Payment",
            paso3Desc: "for the service and request for documents",
            paso4: "4. Delivery and signature",
            paso4Desc: "of documents by the client",
            paso5: "5. Submission",
            paso5Desc: "of the procedure, documents and follow-up",
            paso6: "6. Delivery",
            paso6Desc: "of documentation to the client and closing of the file"
        },

        // Contact Section
        contacto: {
            title: "Contact",
            subtitle: "We are here to help you",
            nombre: "Full name",
            email: "Email",
            mensaje: "Message",
            terminos: "I accept the privacy policy and terms of use",
            btnEnviar: "Send message",
            telefono: "Phone",
            whatsapp: "WhatsApp",
            direccion: "Address",
            horario: "Hours",
            horarioTexto: "Monday to Friday",
            direccionTexto: "Calle Manantial 13, Floor 1, Office 163<br>CEEI Building - 11500 El Puerto de Santa María<br>Cádiz, Spain"
        },

        // Footer
        footer: {
            descripcion: "Administrative procedures and management for individuals and companies.",
            contacto: "Contact",
            legal: "Legal",
            siguenos: "Follow Us",
            politicaSeguridad: "Security Policy",
            politicaPrivacidad: "Privacy Policy",
            terminosCondiciones: "Terms and Conditions",
            copyright: "© 2026 DOYR CAPITAL S.L. All rights reserved."
        },

        // Breadcrumbs and navigation
        breadcrumb: {
            inicio: "Home",
            laAdministracion: "Administration",
            administracionLocal: "Local Administration"
        },

        // Common buttons
        buttons: {
            volver: "Back",
            volverAdmin: "Back to Administration",
            volverLocal: "Back to Local Administration",
            contactarWhatsapp: "Contact via WhatsApp",
            llamarAhora: "Call now",
            formularioContacto: "Contact form"
        },

        // Local Administration Page
        adminLocal: {
            title: "Local Administration",
            subtitle: "Procedures, management and payments with the City Council and local companies",
            tramite1: "Registration in the Census by Change of Residence",
            tramite1Desc: "Registration in the municipal census when you move from another municipality.",
            tramite2: "Deregistration from the Census due to Transfer",
            tramite2Desc: "Information about census deregistration when you move to another municipality.",
            tramite3: "Change of Address within the Municipality",
            tramite3Desc: "Update your address in the census without changing municipality.",
            tramite4: "Change of Water Supply Ownership",
            tramite4Desc: "Management of the change of holder of the water supply contract.",
            tramite5: "Certificate of Cohabitation / Family Unit",
            tramite5Desc: "Document certifying who is registered at your address.",
            tramite6: "Online Census Data Consultation",
            tramite6Desc: "How to consult and download your census information on the electronic portal.",
            tramite7: "Responsible Declaration and Prior Communication",
            tramite7Desc: "Procedures for construction, openings and activities without classic license.",
            tramite8: "Modification of Personal Data in the Census",
            tramite8Desc: "Correction of errors or updating of data in your census registration.",
            tramite9: "Renewal of Census Registration (Foreigners)",
            tramite9Desc: "Periodic confirmation of residence for foreigners in the census.",
            tramite10: "Census Certificate or Voucher",
            tramite10Desc: "Obtaining the voucher or certificate that proves your residence in the municipality."
        }
    }
};

// Función para obtener traducción por clave (soporta claves anidadas como "nav.inicio")
function getTranslation(key, lang) {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return null;
        }
    }

    return value;
}

// Exportar para uso en main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, getTranslation };
}
