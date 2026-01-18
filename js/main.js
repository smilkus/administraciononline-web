// ===================================
// Mobile Menu Toggle
// ===================================

const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// ===================================
// Search Toggle & Functionality
// ===================================

const searchBtn = document.getElementById('searchBtn');
const searchForm = document.getElementById('searchForm');
const searchClose = document.getElementById('searchClose');
const searchInput = document.querySelector('.search-input');

// Base de datos de búsqueda del sitio
const searchData = [
    // Trámites de Administración Local
    { title: 'Alta en el Padrón por Cambio de Residencia', url: 'tramites/local/alta-padron.html', keywords: 'alta padron empadronamiento residencia mudanza inscripcion municipal', category: 'Administración Local' },
    { title: 'Baja en el Padrón por Traslado', url: 'tramites/local/baja-padron.html', keywords: 'baja padron traslado mudanza otro municipio', category: 'Administración Local' },
    { title: 'Cambio de Domicilio dentro del Municipio', url: 'tramites/local/cambio-domicilio-municipio.html', keywords: 'cambio domicilio direccion mismo municipio actualizar', category: 'Administración Local' },
    { title: 'Cambio de Titularidad del Agua', url: 'tramites/local/cambio-titularidad-agua.html', keywords: 'agua titularidad contrato suministro cambio titular', category: 'Administración Local' },
    { title: 'Certificado de Convivencia / Unidad Familiar', url: 'tramites/local/certificado-convivencia.html', keywords: 'certificado convivencia unidad familiar empadronados domicilio', category: 'Administración Local' },
    { title: 'Consulta de Datos Padronales Online', url: 'tramites/local/consulta-datos-padronales.html', keywords: 'consulta datos padronales online sede electronica descargar', category: 'Administración Local' },
    { title: 'Declaración Responsable y Comunicación Previa', url: 'tramites/local/declaracion-responsable-comunicacion-previa.html', keywords: 'declaracion responsable comunicacion previa obras apertura actividad licencia', category: 'Administración Local' },
    { title: 'Modificación de Datos Personales en el Padrón', url: 'tramites/local/modificacion-datos-padron.html', keywords: 'modificacion datos personales padron rectificacion errores actualizar', category: 'Administración Local' },
    { title: 'Renovación de Inscripción Padronal (Extranjeros)', url: 'tramites/local/renovacion-residencia-extranjeros.html', keywords: 'renovacion inscripcion padronal extranjeros confirmacion residencia', category: 'Administración Local' },
    { title: 'Volante o Certificado de Empadronamiento', url: 'tramites/local/certificado-empadronamiento.html', keywords: 'volante certificado empadronamiento residencia acreditar municipio', category: 'Administración Local' },

    // Secciones principales
    { title: 'Administración Local', url: 'administracion-local.html', keywords: 'administracion local ayuntamiento tramites municipio padron', category: 'Secciones' },
    { title: 'Inicio', url: 'index.html', keywords: 'inicio home principal', category: 'Secciones' },
    { title: 'Nosotros', url: 'index.html#nosotros', keywords: 'nosotros quienes somos empresa', category: 'Secciones' },
    { title: 'Servicios', url: 'index.html#servicios', keywords: 'servicios tramites gestiones online pago tasas', category: 'Secciones' },
    { title: 'Cómo trabajamos', url: 'index.html#como-trabajamos', keywords: 'como trabajamos proceso pasos procedimiento', category: 'Secciones' },
    { title: 'Contacto', url: 'index.html#contacto', keywords: 'contacto formulario mensaje email', category: 'Secciones' },

    // Información de contacto
    { title: 'Teléfono: +34 722 198 901', url: 'tel:+34722198901', keywords: 'telefono llamar contacto numero movil', category: 'Contacto' },
    { title: 'WhatsApp: +34 722 198 901', url: 'https://wa.me/34722198901', keywords: 'whatsapp mensaje chat contacto', category: 'Contacto' },
    { title: 'Email: info@administraciononline.com', url: 'mailto:info@administraciononline.com', keywords: 'email correo electronico mail contacto', category: 'Contacto' },
    { title: 'Dirección: Calle Manantial 13, El Puerto de Santa María', url: 'index.html#contacto', keywords: 'direccion oficina ubicacion donde cadiz puerto santa maria', category: 'Contacto' },

    // Páginas legales
    { title: 'Política de Privacidad', url: 'politica-privacidad.html', keywords: 'politica privacidad datos personales rgpd lopd', category: 'Legal' },
    { title: 'Política de Seguridad', url: 'politica-seguridad.html', keywords: 'politica seguridad proteccion', category: 'Legal' },
    { title: 'Términos y Condiciones', url: 'terminos-condiciones.html', keywords: 'terminos condiciones uso legal', category: 'Legal' }
];

// Función para normalizar texto (quitar acentos y convertir a minúsculas)
function normalizeText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s]/g, '');
}

// Función de búsqueda
function searchSite(query) {
    if (!query || query.length < 2) return [];

    const normalizedQuery = normalizeText(query);
    const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 1);

    const results = searchData.filter(item => {
        const searchableText = normalizeText(item.title + ' ' + item.keywords + ' ' + item.category);
        return queryWords.every(word => searchableText.includes(word));
    });

    // Ordenar por relevancia (coincidencias en título primero)
    results.sort((a, b) => {
        const aInTitle = queryWords.some(word => normalizeText(a.title).includes(word));
        const bInTitle = queryWords.some(word => normalizeText(b.title).includes(word));
        if (aInTitle && !bInTitle) return -1;
        if (!aInTitle && bInTitle) return 1;
        return 0;
    });

    return results.slice(0, 8); // Máximo 8 resultados
}

// Crear contenedor de resultados
let searchResults = document.getElementById('searchResults');
if (!searchResults && searchForm) {
    searchResults = document.createElement('div');
    searchResults.id = 'searchResults';
    searchResults.className = 'search-results';
    searchForm.appendChild(searchResults);
}

// Mostrar resultados de búsqueda
function displaySearchResults(results, query) {
    if (!searchResults) return;

    if (results.length === 0) {
        if (query && query.length >= 2) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>No se encontraron resultados para "<strong>${query}</strong>"</p>
                    <p class="search-suggestion">Intenta con otros términos como: padrón, certificado, teléfono...</p>
                </div>
            `;
        } else {
            searchResults.innerHTML = '';
        }
        return;
    }

    let html = '<ul class="search-results-list">';
    results.forEach(result => {
        const isExternal = result.url.startsWith('http') || result.url.startsWith('tel:') || result.url.startsWith('mailto:');
        const target = isExternal ? ' target="_blank"' : '';
        html += `
            <li class="search-result-item">
                <a href="${result.url}"${target}>
                    <span class="search-result-category">${result.category}</span>
                    <span class="search-result-title">${result.title}</span>
                </a>
            </li>
        `;
    });
    html += '</ul>';

    searchResults.innerHTML = html;
}

// Event listeners para el buscador
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchForm.classList.add('active');
        setTimeout(() => searchInput?.focus(), 100);
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchForm.classList.remove('active');
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    });
}

// Búsqueda en tiempo real
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const results = searchSite(query);
        displaySearchResults(results, query);
    });

    // Buscar al presionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value.trim();
            const results = searchSite(query);
            if (results.length > 0) {
                // Ir al primer resultado
                window.location.href = results[0].url;
            }
        }
    });

    // Cerrar con Escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchForm.classList.remove('active');
            searchInput.value = '';
            if (searchResults) searchResults.innerHTML = '';
        }
    });
}

// Cerrar búsqueda al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        searchForm?.classList.remove('active');
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }
});

// ===================================
// Hero Slider
// ===================================

class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.bullets = document.querySelectorAll('.bullet');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000;

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Event listeners para botones
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Event listeners para bullets
        this.bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch events para móvil
        let touchStartX = 0;
        let touchEndX = 0;

        const sliderWrapper = document.querySelector('.slider-wrapper');

        sliderWrapper?.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        sliderWrapper?.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX) {
                this.nextSlide();
            }
            if (touchEndX > touchStartX) {
                this.prevSlide();
            }
        };

        this.handleSwipe = handleSwipe;

        // Autoplay
        this.startAutoplay();

        // Pausar autoplay al hover
        sliderWrapper?.addEventListener('mouseenter', () => this.stopAutoplay());
        sliderWrapper?.addEventListener('mouseleave', () => this.startAutoplay());
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.bullets[this.currentSlide].classList.remove('active');

        this.currentSlide = index;

        this.slides[this.currentSlide].classList.add('active');
        this.bullets[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prev);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Inicializar slider
const heroSlider = new HeroSlider();

// ===================================
// Smooth Scroll para enlaces
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Evitar scroll para # solo
        if (href === '#' || href === '#!') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation on Scroll
// ===================================

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===================================
// Header Scroll Effect
// ===================================

const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Añadir sombra al hacer scroll
    if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// ===================================
// Contact Form Handler con EmailJS
// ===================================

// Inicializar EmailJS con tu Public Key
// IMPORTANTE: Reemplaza 'TU_PUBLIC_KEY' con tu clave pública de EmailJS
emailjs.init('TU_PUBLIC_KEY');

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;

        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value,
            terminos: document.getElementById('terminos').checked
        };

        // Validación
        if (!formData.nombre || !formData.email || !formData.mensaje) {
            alert('Por favor, completa todos los campos');
            return;
        }

        if (!formData.terminos) {
            alert('Debes aceptar la política de privacidad');
            return;
        }

        // Deshabilitar botón mientras se envía
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        // Parámetros para la plantilla de EmailJS
        const templateParams = {
            from_name: formData.nombre,
            from_email: formData.email,
            message: formData.mensaje,
            to_email: 'gustavo.delolmo@gmail.com'
        };

        try {
            // IMPORTANTE: Reemplaza 'TU_SERVICE_ID' y 'TU_TEMPLATE_ID' con tus IDs de EmailJS
            await emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams);

            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        } catch (error) {
            console.error('Error al enviar:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por teléfono.');
        } finally {
            // Restaurar botón
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// ===================================
// Intersection Observer para animaciones
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
document.querySelectorAll('.stat-card, .servicio-card, .logistica-card, .info-card').forEach(el => {
    observer.observe(el);
});

// ===================================
// Preload de imágenes críticas
// ===================================

function preloadImages() {
    const images = [
        'images/hero-1.jpg',
        'images/hero-2.jpg',
        'images/hero-3.jpg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Ejecutar preload cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadImages);
} else {
    preloadImages();
}

// ===================================
// Lazy Loading para imágenes
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback para navegadores que no soportan lazy loading nativo
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Language Selector / Sistema de Idiomas
// ===================================

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langSelector = document.querySelector('.language-selector');
const langOptions = document.querySelectorAll('.lang-option');
const currentLangFlag = document.getElementById('currentLangFlag');
const currentLangText = document.getElementById('currentLangText');

// Obtener idioma guardado o usar español por defecto
let currentLanguage = localStorage.getItem('siteLanguage') || 'es';

// Inicializar idioma al cargar la página
function initLanguage() {
    if (typeof translations !== 'undefined') {
        applyTranslations(currentLanguage);
        updateLanguageSelector(currentLanguage);
    }
}

// Toggle dropdown del selector de idioma
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
}

// Cerrar dropdown al hacer click fuera
document.addEventListener('click', (e) => {
    if (langSelector && !e.target.closest('.language-selector')) {
        langSelector.classList.remove('active');
    }
});

// Cambiar idioma al seleccionar opción
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        const newLang = option.getAttribute('data-lang');

        if (newLang !== currentLanguage) {
            currentLanguage = newLang;
            localStorage.setItem('siteLanguage', newLang);
            applyTranslations(newLang);
            updateLanguageSelector(newLang);
        }

        langSelector.classList.remove('active');
    });
});

// Actualizar el botón del selector con el idioma actual
function updateLanguageSelector(lang) {
    if (!currentLangFlag || !currentLangText) return;

    // Determinar la ruta base de imágenes
    const imgBasePath = getImageBasePath();

    if (lang === 'es') {
        currentLangFlag.src = imgBasePath + 'flag-es.svg';
        currentLangFlag.alt = 'ES';
        currentLangText.textContent = 'ES';
    } else {
        currentLangFlag.src = imgBasePath + 'flag-en.svg';
        currentLangFlag.alt = 'EN';
        currentLangText.textContent = 'EN';
    }

    // Actualizar estado activo de opciones
    langOptions.forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Obtener ruta base de imágenes según la página actual
function getImageBasePath() {
    const path = window.location.pathname;
    if (path.includes('/tramites/local/')) {
        return '../../images/';
    } else if (path.includes('/tramites/')) {
        return '../images/';
    }
    return 'images/';
}

// Aplicar traducciones a todos los elementos con data-i18n
function applyTranslations(lang) {
    if (typeof translations === 'undefined') return;

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);

        if (translation) {
            // Verificar si es un placeholder
            if (el.hasAttribute('placeholder')) {
                el.placeholder = translation;
            }
            // Verificar si tiene data-i18n-attr para atributos específicos
            else if (el.hasAttribute('data-i18n-attr')) {
                const attr = el.getAttribute('data-i18n-attr');
                el.setAttribute(attr, translation);
            }
            // Por defecto, cambiar innerHTML (soporta HTML como <br>)
            else {
                el.innerHTML = translation;
            }
        }
    });

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// ===================================
// Console log para debugging
// ===================================

console.log('AdministraciónOnline Website - JavaScript cargado correctamente');
console.log('Versión: 1.1.0 - Con sistema de idiomas');