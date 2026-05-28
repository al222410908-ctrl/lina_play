/* app.js - Interactive romantic engine for LinaPlay 💖 */

// Presets of beautiful romantic backgrounds from Unsplash
const IMAGE_PRESETS = [
  "img/1.png", // Foto del mesversario 1 (Ej: Pareja tomándose de las manos)
  "img/", // Foto del mesversario 2 (Ej: Abrazo cariñoso)
  "img/foto3.jpg", // Foto del mesversario 3 (Ej: Dibujo o detalle)
  "img/foto4.jpg", // Foto del mesversario 4 (Ej: Atardecer juntos)
  "img/foto5.jpg", // Foto del mesversario 5 (Ej: Paisaje de montaña)
  "img/foto6.jpg"  // Foto del mesversario 6 (Ej: Noche cálida con luces)
];

// Relationship Start Date (May 15, 2025)
const START_DATE = new Date('2025-05-15T00:00:00');

// Initial default memories (13 Chapters of Love - Months 0 to 12)
const DEFAULT_MEMORIES = [
  {
    number: 0,
    monthName: "Mayo 2025",
    dateString: "15 de Mayo, 2025",
    title: "El Comienzo de Todo",
    caption: "El mágico día en que te pedí que fueras mi novia...",
    duration: 0,
    image: IMAGE_PRESETS[0],
    description: "¡Hola, mi amor! Este es el inicio de nuestra maravillosa aventura juntos. El 15 de mayo de 2025 quedará marcado para siempre como el mejor día de mi vida, cuando finalmente te pedí que fueras mi novia y me diste ese hermoso 'sí'. Estaba súper nervioso, porque desde el primer momento que te vi me traias como loquito, tanto que ni poder tomarte de la manita podia recuerdo que ese dia due la primera vez quee lo hice y que iba super nervioso tanto que se me olvido la comida del picnik y despues de ese si que me  dite sabia que le iba a echar muchas ganas como lo hago ahora tamo mi vida."
  },
  {
    number: 1,
    monthName: "Junio 2025",
    dateString: "15 de Junio, 2025",
    title: "Un Mes Lleno de Magia ✨",
    caption: "31 días de risas compartidas y llamadas infinitas.",
    duration: 31,
    image: IMAGE_PRESETS[1],
    description: "¡Feliz primer mesversario, mi princesa! Aún se siente irreal decir que eres mi novia. Este primer mes ha sido un sueño hecho realidad. Adoro nuestras pláticas interminables por la noche, cómo nos entendemos con solo mirarnos y la increíble conexión que tenemos. Gracias por llenar mis días de tanta dulzura y alegría."
  },
  {
    number: 2,
    monthName: "Julio 2025",
    dateString: "15 de Julio, 2025",
    title: "Complicidad Infinita 🌸",
    caption: "Cada cita se siente como un viaje nuevo e increíble.",
    duration: 61,
    image: IMAGE_PRESETS[2],
    description: "Ya son dos meses, mi amor, y mi cariño por ti no deja de crecer exponencialmente. En este tiempo he descubierto lo divertida, inteligente y atenta que eres. Me encantan nuestros chistes locales y cómo logras ponerme de buen humor al instante. Eres mi refugio seguro y mi persona favorita en el mundo entero."
  },
  {
    number: 3,
    monthName: "Agosto 2025",
    dateString: "15 de Agosto, 2025",
    title: "Atardeceres a tu Lado 🌅",
    caption: "Viendo la vida en colores hermosos gracias a ti.",
    duration: 92,
    image: IMAGE_PRESETS[3],
    description: "¡Felices 3 meses, mi vida! Este verano ha sido sumamente mágico porque lo pasé tomado de tu mano. Cada atardecer que vemos juntos se siente como una obra de arte, pero ninguno se compara con la luz que desprendes tú. Gracias por enseñarme lo que realmente es un amor sano, maduro y repleto de risas."
  },
  {
    number: 4,
    monthName: "Septiembre 2025",
    dateString: "15 de Septiembre, 2025",
    title: "Abrazos Cálidos 🤗",
    caption: "Tu abrazo es el único lugar donde quiero estar.",
    duration: 123,
    image: IMAGE_PRESETS[4],
    description: "Cuatro meses de puros recuerdos hermosos. Cuando me abrazas, siento que el mundo se detiene y que todo va a estar bien. Me encanta tu aroma, la calidez de tu pecho y la tranquilidad que me transmites. Eres mi hogar, mi paz y mi mayor motivación todos los días."
  },
  {
    number: 5,
    monthName: "Octubre 2025",
    dateString: "15 de Octubre, 2025",
    title: "Bajo las Estrellas 🌌",
    caption: "Haciendo planes locos y soñando con un futuro juntos.",
    duration: 153,
    image: IMAGE_PRESETS[5],
    description: "¡Felices 5 meses, mi amor! Me fascina soñar despierto contigo. Cuando hablamos de viajar juntos, de nuestras metas y del futuro, me lleno de una ilusión inmensa. Estoy seguro de que lograremos todo lo que nos propongamos porque formamos el mejor equipo del universo. Te amo hasta el infinito."
  },
  {
    number: 6,
    monthName: "Noviembre 2025",
    dateString: "15 de Noviembre, 2025",
    title: "Medio Año de Amor Completo 💕",
    caption: "Medio año siendo los novios más felices del planeta.",
    duration: 184,
    image: IMAGE_PRESETS[0],
    description: "¡Medio año, mi princesa hermosa! Se ha pasado volando porque el tiempo corre cuando eres feliz. Estos 6 meses han estado repletos de aprendizaje, apoyo mutuo y un cariño gigantesco. Hemos superado pequeños retos juntos y eso solo ha fortalecido lo que sentimos. Eres mi gran amor y lo mejor que me ha pasado."
  },
  {
    number: 7,
    monthName: "Diciembre 2025",
    dateString: "15 de Diciembre, 2025",
    title: "Nuestra Primera Navidad 🎄",
    caption: "Mi mejor regalo de navidad siempre serás tú.",
    duration: 214,
    image: IMAGE_PRESETS[1],
    description: "¡Felices 7 meses! La época navideña siempre es hermosa, pero este año fue extraordinariamente especial porque te tengo a mi lado. No necesito pedirle nada a Santa ni al universo, porque mi mejor regalo ya está conmigo y eres tú. Gracias por tu ternura y por hacer de este mes uno de los más cálidos."
  },
  {
    number: 8,
    monthName: "Enero 2026",
    dateString: "15 de Enero, 2026",
    title: "Año Nuevo, Mismo Amor 🎆",
    caption: "Comenzando otro año con el propósito de hacerte sonreír.",
    duration: 245,
    image: IMAGE_PRESETS[2],
    description: "¡Felices 8 meses y feliz año nuevo, mi vida! Empezar el año contigo me llena de una energía maravillosa. Mi único propósito para este 2026 es seguir construyendo recuerdos inolvidables a tu lado, cuidarte como te lo mereces y sacarte miles de sonrisas todos los días. ¡Por un año repleto de complicidad!"
  },
  {
    number: 9,
    monthName: "Febrero 2026",
    dateString: "15 de Febrero, 2026",
    title: "San Valentín Especial 🍫",
    caption: "Mi San Valentín favorito por el resto de mi vida.",
    duration: 276,
    image: IMAGE_PRESETS[3],
    description: "¡Nueve meses de amor incondicional! Celebrar San Valentín como tu novio ha sido maravilloso. Eres mi novia, mi mejor amiga, mi confidente y mi compañera de travesuras. Adoro los pequeños detalles que me das, tus mensajitos de buenos días y la forma tan dulce en la que me demuestras tu amor constantemente."
  },
  {
    number: 10,
    monthName: "Marzo 2026",
    dateString: "15 de Marzo, 2026",
    title: "Días de Sol y Flores 🌻",
    caption: "La primavera florece más hermosa cuando estás cerca.",
    duration: 304,
    image: IMAGE_PRESETS[4],
    description: "¡Felices 10 meses, mi sol! A medida que los días se vuelven más cálidos, me doy cuenta de que tu presencia en mi vida es como una eterna primavera que llena todo de color, flores y calidez. Gracias por ser tan comprensiva, cariñosa y por estar siempre para mí. Te amo con toda mi alma."
  },
  {
    number: 11,
    monthName: "Abril 2026",
    dateString: "15 de Abril, 2026",
    title: "Risas Bajo la Lluvia 🌧️",
    caption: "Incluso en los días grises, tú brillas con fuerza.",
    duration: 335,
    image: IMAGE_PRESETS[5],
    description: "¡Ya son 11 meses, mi reina! Casi un año entero de compartir nuestras vidas. Me encanta ver películas contigo en los días lluviosos, abrazarte fuerte y platicar de tonterías. Eres mi calma en medio de cualquier tormenta y la luz más brillante que guía mi camino. Eres sencillamente perfecta."
  },
  {
    number: 12,
    monthName: "Mayo 2026",
    dateString: "15 de Mayo, 2026",
    title: "¡Nuestro Primer Año Juntos! 🏆💖",
    caption: "365 días amándote locamente... ¡Y vamos por más!",
    duration: 365,
    image: IMAGE_PRESETS[0],
    description: "¡¡FELIZ PRIMER AÑO DE NOVIOOOOS, MI AMOR!! 💖✨ Aún no puedo creer que haya pasado un año entero desde ese inolvidable 15 de mayo de 2025. Ha sido el año más feliz, pleno y hermoso de toda mi vida, y todo te lo debo a ti. Gracias por tu paciencia, tu complicidad, tu inmenso cariño y tu apoyo incondicional. Eres el amor de mi vida, mi compañera eterna y mi mayor orgullo. Este es solo el primer capítulo de un libro infinito que escribiremos juntos. ¡Te amo con todo mi ser, por hoy y para siempre!"
  }
];

// Initial default wishes
const DEFAULT_WISHES = [
  { id: 1, text: "Ver la lluvia de estrellas acostados en una cabaña en la montaña ⛰️🌌", completed: false },
  { id: 2, text: "Adoptar un perrito o gatito juntos y darle mucho amor 🐾", completed: false },
  { id: 3, text: "Hacer un viaje sorpresa de fin de semana a la playa 🏖️✈️", completed: false },
  { id: 4, text: "Cantar a todo pulmón en el concierto de nuestro artista favorito 🎤🎶", completed: false },
  { id: 5, text: "Hacer una videollamada cocinando la misma receta al mismo tiempo 🍕🍝", completed: true }
];

// Initial default coupons
const DEFAULT_COUPONS = [
  { id: 1, title: "🎟️ Vale por un Abrazo de Oso Gigante", desc: "Válido para recargar energías en un día agotador.", redeemed: false },
  { id: 2, title: "🎟️ Vale por tu Postre/Helado Favorito", desc: "Alan te llevará por un antojo dulce cuando lo pidas.", redeemed: false },
  { id: 3, title: "🎟️ Vale por Masajes Relajantes de Alan", desc: "Garantiza 30 minutos de paz y mimos ilimitados.", redeemed: false },
  { id: 4, title: "🎟️ Vale por una Disculpa y Mimos Infinitos", desc: "Canjeable para solucionar cualquier pequeño desacuerdo tiernamente.", redeemed: false },
  { id: 5, title: "🎟️ Vale por Cocinarte tu Platillo Favorito", desc: "Alan preparará la cena especial con velas de tu preferencia.", redeemed: false }
];

// State Manager loaded from LocalStorage
let memories = [];
let wishes = [];
let coupons = [];
let currentPresetIndex = 0;
let currentRole = localStorage.getItem('linaplay_active_role') || 'lina';

// Media draft states during active edits
let currentEditMedia = [];
let currentAddType = 'image';
let currentLinaEditMedia = [];
let currentLinaAddType = 'image';

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  renderMemories();
  renderWishes();
  renderCoupons();
  initRelationshipClock();
  initAmbientHearts();
  initMusicPlayer();
  initModalsHandlers();
  initFormHandlers();
  initLinaFormHandlers();
  initStatBarAnimations();
  initResetButton();
  initRoleSelector();
});

// Load variables from LocalStorage or seed default values
function initLocalStorage() {
  // Memories
  const localMem = localStorage.getItem('linaplay_memories');
  if (localMem) {
    try {
      memories = JSON.parse(localMem);
    } catch (e) { memories = DEFAULT_MEMORIES; }
  } else {
    memories = DEFAULT_MEMORIES;
  }

  // Migrate old Unsplash URLs and initialize media list support
  let updated = false;
  memories.forEach(mem => {
    // 1. Migrate old Unsplash URLs
    if (typeof mem.image === 'string' && mem.image.startsWith('https://images.unsplash.com')) {
      const originalUnsplashPresets = [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
        "https://images.unsplash.com/photo-1507504038482-7621ef48c464",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9"
      ];
      let foundIdx = originalUnsplashPresets.findIndex(p => mem.image.includes(p));
      if (foundIdx !== -1) {
        mem.image = IMAGE_PRESETS[foundIdx];
        updated = true;
      } else {
        mem.image = IMAGE_PRESETS[mem.number % IMAGE_PRESETS.length];
        updated = true;
      }
    }
    
    // 2. Initialize media array
    if (!mem.media || !Array.isArray(mem.media)) {
      mem.media = [];
      if (mem.image) {
        mem.media.push({ type: 'image', url: mem.image });
        updated = true;
      }
    }
    
    // 3. Initialize linaMedia array
    if (!mem.linaMedia || !Array.isArray(mem.linaMedia)) {
      mem.linaMedia = [];
      if (mem.linaImage) {
        mem.linaMedia.push({ type: 'image', url: mem.linaImage });
        updated = true;
      }
    }
  });

  if (updated || !localMem) {
    localStorage.setItem('linaplay_memories', JSON.stringify(memories));
  }

  // Wishes
  const localWish = localStorage.getItem('linaplay_wishes');
  if (localWish) {
    try { wishes = JSON.parse(localWish); } catch (e) { wishes = DEFAULT_WISHES; }
  } else {
    wishes = DEFAULT_WISHES;
    localStorage.setItem('linaplay_wishes', JSON.stringify(wishes));
  }

  // Coupons
  const localCoup = localStorage.getItem('linaplay_coupons');
  if (localCoup) {
    try { coupons = JSON.parse(localCoup); } catch (e) { coupons = DEFAULT_COUPONS; }
  } else {
    coupons = DEFAULT_COUPONS;
    localStorage.setItem('linaplay_coupons', JSON.stringify(coupons));
  }
}

// Reset Album data to reload default code-level values
function initResetButton() {
  const resetBtn = document.getElementById('btn-reset-album');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const confirmReset = confirm("¿Estás seguro de que deseas restablecer el álbum? Esto borrará las fotos/textos actuales del navegador y cargará las nuevas imágenes y textos que hayas configurado en el archivo app.js.");
      if (confirmReset) {
        localStorage.removeItem('linaplay_memories');
        localStorage.removeItem('linaplay_wishes');
        localStorage.removeItem('linaplay_coupons');
        window.location.reload();
      }
    });
  }
}

// Visita de hoy role selector system
function initRoleSelector() {
  const btnAlan = document.getElementById('btn-role-alan');
  const btnLina = document.getElementById('btn-role-lina');
  const resetBtn = document.getElementById('btn-reset-album');

  if (!btnAlan || !btnLina) return;

  // Apply active class based on currentRole
  if (currentRole === 'alan') {
    btnAlan.classList.add('active');
    btnLina.classList.remove('active');
    if (resetBtn) resetBtn.style.display = 'inline-flex';
  } else {
    btnLina.classList.add('active');
    btnAlan.classList.remove('active');
    if (resetBtn) resetBtn.style.display = 'none';
  }

  btnAlan.addEventListener('click', () => {
    if (currentRole === 'alan') return;
    const pin = prompt("Ingresa el día de su aniversario (ej: 15) para confirmar que eres Alan:");
    if (pin === "15") {
      currentRole = 'alan';
      localStorage.setItem('linaplay_active_role', 'alan');
      btnAlan.classList.add('active');
      btnLina.classList.remove('active');
      if (resetBtn) resetBtn.style.display = 'inline-flex';
      alert("¡Identidad confirmada! Bienvenido de vuelta, Alan 👑");
      renderMemories();
    } else {
      alert("Código incorrecto... ¡Acceso denegado! 🚫");
    }
  });

  btnLina.addEventListener('click', () => {
    if (currentRole === 'lina') return;
    currentRole = 'lina';
    localStorage.setItem('linaplay_active_role', 'lina');
    btnLina.classList.add('active');
    btnAlan.classList.remove('active');
    if (resetBtn) resetBtn.style.display = 'none';
    alert("¡Hola, Princesa Lina! 🌸 Puedes dejar tu mensajito y subir tus fotos en cada mes.");
    renderMemories();
  });
}

// Helper to get YouTube Video ID
function getYouTubeId(url) {
  if (!url) return null;
  
  // Clean URL string from spaces and possible iframe tags
  let cleanUrl = url.trim();

  // Extract src if user pasted a full iframe HTML tag
  if (cleanUrl.includes('<iframe') && cleanUrl.includes('src="')) {
    const srcMatch = cleanUrl.match(/src="([^"]+)"/);
    if (srcMatch && srcMatch[1]) {
      cleanUrl = srcMatch[1];
    }
  }

  // 1. Handle youtu.be/abc123XYZ12 short URLs
  if (cleanUrl.includes('youtu.be/')) {
    const parts = cleanUrl.split('youtu.be/');
    if (parts.length > 1) {
      const idPart = parts[1].split('?')[0].split('#')[0];
      return idPart.substring(0, 11);
    }
  }

  // 2. Handle YouTube Shorts youtube.com/shorts/
  if (cleanUrl.includes('/shorts/')) {
    const parts = cleanUrl.split('/shorts/');
    if (parts.length > 1) {
      const idPart = parts[1].split('?')[0].split('&')[0];
      return idPart.substring(0, 11);
    }
  }

  // 3. Handle standard youtube.com/watch?v=...
  if (cleanUrl.includes('watch?v=')) {
    const parts = cleanUrl.split('watch?v=');
    if (parts.length > 1) {
      const idPart = parts[1].split('&')[0].split('#')[0];
      return idPart.substring(0, 11);
    }
  }

  // 4. Handle alternative standard links
  if (cleanUrl.includes('&v=')) {
    const parts = cleanUrl.split('&v=');
    if (parts.length > 1) {
      const idPart = parts[1].split('&')[0].split('#')[0];
      return idPart.substring(0, 11);
    }
  }

  // 5. Handle standard embeds youtube.com/embed/...
  if (cleanUrl.includes('embed/')) {
    const parts = cleanUrl.split('embed/');
    if (parts.length > 1) {
      const idPart = parts[1].split('?')[0].split('"')[0];
      return idPart.substring(0, 11);
    }
  }

  // Fallback regex search for other hidden formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = cleanUrl.match(regExp);
  if (match && match[2] && match[2].length >= 11) {
    const idCandidate = match[2];
    return idCandidate.substring(0, 11);
  }
  
  return null;
}

// Helper to check if a URL is a YouTube link
function isYouTubeUrl(url) {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  return lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be');
}

// Helper to render media cover on the main Polaroid grid cards
function getMediaCoverHtml(mediaArray, defaultImage) {
  if (!mediaArray || mediaArray.length === 0) {
    return `<img src="${defaultImage || 'img/1.png'}" alt="Recuerdo" class="polaroid-img">`;
  }
  
  const cover = mediaArray[0];
  if (cover.type === 'video') {
    return `<video src="${cover.url}" class="polaroid-img" muted autoplay loop playsinline></video>`;
  } else if (cover.type === 'youtube' || isYouTubeUrl(cover.url)) {
    const ytId = getYouTubeId(cover.url);
    if (ytId) {
      return `<img src="https://img.youtube.com/vi/${ytId}/0.jpg" alt="YouTube Cover" class="polaroid-img">`;
    }
  }
  
  return `<img src="${cover.url}" alt="Recuerdo" class="polaroid-img">`;
}

// Renders the interactive media slider (carousel) for photos & videos inside the Modals
function renderMediaSlider(mediaArray, container, sliderId) {
  container.innerHTML = '';
  
  if (!mediaArray || mediaArray.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';

  // Create main slider container
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'media-slider-container';

  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'slider-wrapper';
  sliderWrapper.id = `slider-wrapper-${sliderId}`;

  // Populate slides
  mediaArray.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'slider-slide';
    
    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.url;
      video.className = 'slider-media-item';
      video.controls = true;
      video.playsInline = true;
      video.loop = true;
      video.muted = true;
      slide.appendChild(video);
    } else if (item.type === 'youtube' || isYouTubeUrl(item.url)) {
      const ytId = getYouTubeId(item.url);
      if (ytId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${ytId}`;
        iframe.className = 'slider-media-item';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        slide.appendChild(iframe);
      } else {
        const fallback = document.createElement('div');
        fallback.className = 'slider-media-item media-grid-item-youtube';
        fallback.innerHTML = `🎥 URL de YouTube no válida`;
        slide.appendChild(fallback);
      }
    } else {
      // Default: image
      const img = document.createElement('img');
      img.src = item.url;
      img.className = 'slider-media-item';
      img.alt = 'Recuerdo';
      slide.appendChild(img);
    }
    
    sliderWrapper.appendChild(slide);
  });

  sliderContainer.appendChild(sliderWrapper);

  // If more than 1 item, add controls
  if (mediaArray.length > 1) {
    let currentIdx = 0;

    // Left arrow
    const leftArrow = document.createElement('button');
    leftArrow.className = 'slider-arrow slider-arrow-left';
    leftArrow.innerHTML = '‹';
    leftArrow.type = 'button';
    
    // Right arrow
    const rightArrow = document.createElement('button');
    rightArrow.className = 'slider-arrow slider-arrow-right';
    rightArrow.innerHTML = '›';
    rightArrow.type = 'button';

    // Dots indicator container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';

    mediaArray.forEach((_, dIdx) => {
      const dot = document.createElement('span');
      dot.className = `slider-dot ${dIdx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(dIdx);
      });
      dotsContainer.appendChild(dot);
    });

    function goToSlide(targetIdx) {
      // Pause any video/iframe playing in other slides when changing slide
      const videos = sliderWrapper.querySelectorAll('video');
      videos.forEach(v => v.pause());
      
      const iframes = sliderWrapper.querySelectorAll('iframe');
      iframes.forEach(i => {
        const currentSrc = i.src;
        i.src = '';
        i.src = currentSrc;
      });

      currentIdx = (targetIdx + mediaArray.length) % mediaArray.length;
      sliderWrapper.style.transform = `translateX(-${currentIdx * 100}%)`;
      
      // Update dots
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach((dot, dotIdx) => {
        if (dotIdx === currentIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    leftArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIdx - 1);
    });

    rightArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      goToSlide(currentIdx + 1);
    });

    // Prevent modal flip on slider click
    sliderContainer.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    sliderContainer.appendChild(leftArrow);
    sliderContainer.appendChild(rightArrow);
    sliderContainer.appendChild(dotsContainer);
  }

  container.appendChild(sliderContainer);
}

// Render current media list inside Editor modal grids
function renderEditorMediaGrid(mediaArray, gridId, onUpdate) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';

  if (mediaArray.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 1.2rem 0;">No hay fotos o videos todavía. ¡Agrega algunos abajo! 📸🎥</div>`;
    return;
  }

  mediaArray.forEach((item, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'media-grid-item';

    if (item.type === 'video') {
      const video = document.createElement('video');
      video.src = item.url;
      video.muted = true;
      wrapper.appendChild(video);
    } else if (item.type === 'youtube' || isYouTubeUrl(item.url)) {
      const ytId = getYouTubeId(item.url);
      const ytDiv = document.createElement('div');
      ytDiv.className = 'media-grid-item-youtube';
      ytDiv.innerHTML = `🎬<span>YouTube</span>`;
      wrapper.appendChild(ytDiv);
    } else {
      const img = document.createElement('img');
      img.src = item.url;
      wrapper.appendChild(img);
    }

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'media-item-delete';
    deleteBtn.innerHTML = '×';
    deleteBtn.type = 'button';
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      mediaArray.splice(idx, 1);
      renderEditorMediaGrid(mediaArray, gridId, onUpdate);
      if (onUpdate) onUpdate();
    });

    wrapper.appendChild(deleteBtn);
    grid.appendChild(wrapper);
  });
}

// Render memories into grid
function renderMemories() {
  const grid = document.getElementById('memories-grid');
  grid.innerHTML = '';

  memories.forEach((mem, index) => {
    const badgeText = mem.number === 0 ? "El Inicio 💖" : `Mes ${mem.number} ✨`;
    
    // Choose edit button text and styling depending on currentRole
    const actionBtn = currentRole === 'alan'
      ? `<button class="btn-card btn-edit" data-index="${index}">✏️ Editar</button>`
      : `<button class="btn-card btn-edit btn-lina-respond" data-index="${index}" style="background:#fef0f4; color:var(--accent-pink); border: 1px solid rgba(253,62,129,0.25);">✏️ Responder 🌸</button>`;

    const wrapper = document.createElement('div');
    wrapper.className = 'polaroid-wrapper';

    const mediaCountBadge = (mem.media && mem.media.length > 1) 
      ? `<div class="polaroid-media-count">📸 ${mem.media.length}</div>` 
      : '';

    wrapper.innerHTML = `
      <div class="polaroid-card">
        <div class="polaroid-img-container">
          ${getMediaCoverHtml(mem.media, mem.image)}
          <div class="polaroid-badge">${badgeText}</div>
          ${mediaCountBadge}
        </div>
        <div class="polaroid-content">
          <div class="polaroid-date">${mem.dateString}</div>
          <h3 class="polaroid-title">${mem.title}</h3>
          <p class="polaroid-caption">${mem.caption}</p>
          <div class="polaroid-actions">
            <button class="btn-card btn-read" data-index="${index}">📖 Carta</button>
            ${actionBtn}
          </div>
        </div>
      </div>
    `;

    // Hook events inside cards to buttons
    wrapper.querySelector('.btn-read').addEventListener('click', (e) => {
      e.stopPropagation();
      openLetterModal(index);
    });

    wrapper.querySelector('.btn-edit').addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentRole === 'alan') {
        openEditorModal(index);
      } else {
        openLinaModal(index);
      }
    });

    // Polaroid card itself can trigger the 3D flip details too
    wrapper.querySelector('.polaroid-card').addEventListener('click', () => {
      openLetterModal(index);
    });

    grid.appendChild(wrapper);
  });
}

// Render wishes list
function renderWishes() {
  const list = document.getElementById('wishes-list');
  list.innerHTML = '';

  wishes.forEach(wish => {
    const item = document.createElement('div');
    item.className = `wish-item ${wish.completed ? 'completed' : ''}`;
    item.innerHTML = `
      <label class="wish-checkbox-label">
        <input type="checkbox" class="wish-checkbox" data-id="${wish.id}" ${wish.completed ? 'checked' : ''}>
        <span class="wish-text">${wish.text}</span>
      </label>
      <button class="btn-delete-wish" data-id="${wish.id}" title="Eliminar Deseo">
        🗑️
      </button>
    `;

    // Wish toggle completed
    item.querySelector('.wish-checkbox').addEventListener('change', (e) => {
      toggleWishCompleted(wish.id, e.target.checked);
    });

    // Wish delete
    item.querySelector('.btn-delete-wish').addEventListener('click', () => {
      deleteWish(wish.id);
    });

    list.appendChild(item);
  });
}

// Render couples coupons list
function renderCoupons() {
  const list = document.getElementById('coupons-list');
  list.innerHTML = '';

  coupons.forEach(coupon => {
    const item = document.createElement('div');
    item.className = `wish-item ${coupon.redeemed ? 'completed' : ''}`;

    const actionBtn = coupon.redeemed
      ? `<span style="font-size:0.8rem; font-weight:600; color:var(--accent-pink);">Reclamado 💖</span>`
      : `<button class="btn-card btn-read btn-redeem-coupon" data-id="${coupon.id}" style="padding:0.3rem 0.8rem; font-size:0.7rem;">Reclamar 🌸</button>`;

    item.innerHTML = `
      <div style="flex-grow:1;">
        <span class="wish-text" style="font-weight:600; display:block;">${coupon.title}</span>
        <span style="font-size:0.75rem; color:var(--text-secondary);">${coupon.desc}</span>
      </div>
      <div style="flex-shrink:0;">
        ${actionBtn}
      </div>
    `;

    // Hook claim coupon event
    if (!coupon.redeemed) {
      item.querySelector('.btn-redeem-coupon').addEventListener('click', (e) => {
        redeemCoupon(coupon.id, e.target);
      });
    }

    list.appendChild(item);
  });
}

// Toggle wish checked
function toggleWishCompleted(id, completed) {
  wishes = wishes.map(w => w.id === id ? { ...w, completed } : w);
  localStorage.setItem('linaplay_wishes', JSON.stringify(wishes));
  renderWishes();
}

// Delete wish
function deleteWish(id) {
  wishes = wishes.filter(w => w.id !== id);
  localStorage.setItem('linaplay_wishes', JSON.stringify(wishes));
  renderWishes();
}

// Redeem coupon event
function redeemCoupon(id, element) {
  // Coupon redeemed state
  coupons = coupons.map(c => c.id === id ? { ...c, redeemed: true } : c);
  localStorage.setItem('linaplay_coupons', JSON.stringify(coupons));

  // Audio chime effect

  // Blast hearts from coupon element!
  const rect = element.getBoundingClientRect();
  createHeartExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);

  // Show customized Sweet Alert
  alert(`¡Cupón Reclamado con éxito! 🌸✨\n\nLina ha canjeado el cupón. Alan recibirá una notificación de amor y preparará todo para consentirte. ¡Te amo! 💖`);

  renderCoupons();
}

// Add new wish to list
document.getElementById('wish-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('wish-input');
  const text = input.value.trim();

  if (text) {
    const newWish = {
      id: Date.now(),
      text,
      completed: false
    };
    wishes.push(newWish);
    localStorage.setItem('linaplay_wishes', JSON.stringify(wishes));
    input.value = '';
    renderWishes();

    // Tiny heartbeat burst on input
    const btnRect = e.target.querySelector('.btn-wish').getBoundingClientRect();
    createHeartExplosion(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);
  }
});

// Relationship Live Clock Engine
function initRelationshipClock() {
  function updateRelationshipClock() {
    const now = new Date();

    // Difference in milliseconds
    let diff = now - START_DATE;

    if (diff < 0) diff = 0;

    const msInSec = 1000;
    const msInMin = 60 * msInSec;
    const msInHour = 60 * msInMin;
    const msInDay = 24 * msInHour;

    // Compute total elapsed days
    const totalDays = Math.floor(diff / msInDay);

    // Breakdown calculations
    let tempDiff = diff;

    // Simple math years/months approximation
    let years = now.getFullYear() - START_DATE.getFullYear();
    let months = now.getMonth() - START_DATE.getMonth();
    let days = now.getDate() - START_DATE.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Hours, mins, secs remaining
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Display clock values
    document.getElementById('clock-years').innerText = String(years).padStart(2, '0');
    document.getElementById('clock-months').innerText = String(months).padStart(2, '0');
    document.getElementById('clock-days').innerText = String(days).padStart(2, '0');
    document.getElementById('clock-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('clock-minutes').innerText = String(minutes).padStart(2, '0');

    // Remove Years card if 0 to keep grid clean, otherwise leave it
    if (years === 0) {
      document.getElementById('clock-years-card').style.display = 'none';
    } else {
      document.getElementById('clock-years-card').style.display = 'block';
    }

    // COUNTDOWN TO THE NEXT 15TH OF THE MONTH
    let nextMilestone = new Date(now.getFullYear(), now.getMonth(), 15, 0, 0, 0);
    if (now.getDate() > 15 || (now.getDate() === 15 && now.getHours() >= 0)) {
      nextMilestone = new Date(now.getFullYear(), now.getMonth() + 1, 15, 0, 0, 0);
    }

    const countDiff = nextMilestone - now;

    const cDays = Math.floor(countDiff / msInDay);
    const cHours = Math.floor((countDiff % msInDay) / msInHour);
    const cMins = Math.floor((countDiff % msInHour) / msInMin);
    const cSecs = Math.floor((countDiff % msInMin) / msInSec);

    document.getElementById('countdown-next').innerHTML = `${cDays}d ${String(cHours).padStart(2, '0')}h ${String(cMins).padStart(2, '0')}m ${String(cSecs).padStart(2, '0')}s`;
  }

  updateRelationshipClock();
  setInterval(updateRelationshipClock, 1000);
}

// Background Spawning Romantic Hearts
function initAmbientHearts() {
  const container = document.getElementById('heart-particles');
  const symbols = ['💖', '♥', '🌸', '✨', '💕', '💓'];

  function spawnHeart() {
    if (document.hidden) return;

    const heart = document.createElement('div');
    heart.className = 'floating-heart';

    // Random position and scaling
    const startLeft = Math.random() * 100;
    const scale = Math.random() * 0.7 + 0.5;
    const speed = Math.random() * 6 + 6;
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    heart.innerText = randomSymbol;
    heart.style.left = `${startLeft}vw`;
    heart.style.animationDuration = `${speed}s`;
    heart.style.transform = `scale(${scale})`;

    // Pink accent variation
    const hue = 330 + Math.random() * 30;
    heart.style.color = `hsl(${hue}, 95%, 70%)`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, speed * 1000);
  }

  // Spawn initially, then every 1.5 seconds
  for (let i = 0; i < 8; i++) {
    setTimeout(spawnHeart, Math.random() * 6000);
  }
  setInterval(spawnHeart, 1600);
}

// Custom Audio Control Rotating disk
function initMusicPlayer() {
  const btn = document.getElementById('btn-music-play');
  const vinyl = document.getElementById('vinyl-disc');
  let isPlaying = false;

  btn.addEventListener('click', () => {
    if (!ytPlayer || typeof ytPlayer.playVideo !== 'function') {
      alert("El reproductor de YouTube se está cargando, por favor espera un momento... 🎵");
      return;
    }

    if (!isPlaying) {
      ytPlayer.playVideo();
      isPlaying = true;
      btn.innerText = "Pausar 🌸";
      vinyl.classList.add('playing');
    } else {
      ytPlayer.pauseVideo();
      isPlaying = false;
      btn.innerText = "Escuchar Música 🎵";
      vinyl.classList.remove('playing');
    }
  });
}

// Modals Trigger system
function initModalsHandlers() {
  const letterModal = document.getElementById('letter-modal-overlay');
  const editorModal = document.getElementById('editor-modal-overlay');

  // Close letter modal
  document.getElementById('btn-close-letter').addEventListener('click', () => {
    letterModal.classList.remove('active');
  });

  // Close editor modal
  document.getElementById('btn-close-editor').addEventListener('click', () => {
    editorModal.classList.remove('active');
  });
  document.getElementById('btn-cancel-edit').addEventListener('click', () => {
    editorModal.classList.remove('active');
  });

  // Closes modal if user clicks outside container glass box
  window.addEventListener('click', (e) => {
    if (e.target === letterModal) letterModal.classList.remove('active');
    if (e.target === editorModal) editorModal.classList.remove('active');
  });

  // Hook 3D Flip letter click toggle (ONLY flip if not clicking internal buttons/slider controls)
  const flipCard = document.getElementById('letter-flip-card');
  flipCard.addEventListener('click', (e) => {
    // Avoid flipping if user clicked slider controls, youtube iframes, or buttons
    if (e.target.closest('.media-slider-container') || e.target.closest('.btn-letter-tab') || e.target.closest('.btn-send-love')) {
      return;
    }
    flipCard.classList.toggle('flipped');
  });

  // Tabs switching inside 3D Polaroid back face
  const tabAlan = document.getElementById('tab-alan');
  const tabLina = document.getElementById('tab-lina');
  const contentAlan = document.getElementById('modal-letter-text');
  const contentLina = document.getElementById('modal-letter-text-lina');
  const signatureText = document.getElementById('letter-signature-text');

  if (tabAlan && tabLina && contentAlan && contentLina) {
    tabAlan.addEventListener('click', (e) => {
      e.stopPropagation();
      tabAlan.classList.add('active');
      tabLina.classList.remove('active');
      contentAlan.style.display = 'block';
      contentLina.style.display = 'none';
      signatureText.innerText = "De Alan, con amor 💖";
    });

    tabLina.addEventListener('click', (e) => {
      e.stopPropagation();
      tabLina.classList.add('active');
      tabAlan.classList.remove('active');
      contentAlan.style.display = 'none';
      contentLina.style.display = 'block';
      signatureText.innerText = "De Lina, con amor 🌸";
    });
  }

  // Enviar Amor (Heart explosion blast triggers)
  const sparkBtn = document.getElementById('btn-send-love-spark');
  sparkBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    const rect = sparkBtn.getBoundingClientRect();
    createHeartExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);

    const originalText = sparkBtn.innerText;
    sparkBtn.innerText = "¡Amor Enviado! 💕";
    sparkBtn.style.background = "var(--accent-gold)";
    sparkBtn.style.color = "#1a1a1a";

    setTimeout(() => {
      sparkBtn.innerText = originalText;
      sparkBtn.style.background = "var(--accent-pink)";
      sparkBtn.style.color = "#fff";
    }, 1800);
  });
}

// Open and populate 3D Flip polaroid letter modal
function openLetterModal(index) {
  const mem = memories[index];

  // Set Front Details (Render Media Slider with carousel)
  const frontContainer = document.getElementById('modal-letter-media-container');
  renderMediaSlider(mem.media || [{type: 'image', url: mem.image}], frontContainer, `front-${index}`);

  document.getElementById('modal-letter-month').innerText = mem.number === 0 ? "El Comienzo ✨" : `Mes ${mem.number} ✨`;
  document.getElementById('modal-letter-title').innerText = mem.title;

  // Set Back details
  document.getElementById('modal-letter-date').innerText = mem.dateString;
  document.getElementById('modal-letter-title-back').innerText = mem.title;
  document.getElementById('modal-letter-text').innerText = mem.description;

  // Reset Tab state to Alan's tab by default
  const tabAlan = document.getElementById('tab-alan');
  const tabLina = document.getElementById('tab-lina');
  const contentAlan = document.getElementById('modal-letter-text');
  const contentLina = document.getElementById('modal-letter-text-lina');
  const signatureText = document.getElementById('letter-signature-text');

  if (tabAlan && tabLina && contentAlan && contentLina) {
    tabAlan.classList.add('active');
    tabLina.classList.remove('active');
    contentAlan.style.display = 'block';
    contentLina.style.display = 'none';
    signatureText.innerText = "De Alan, con amor 💖";
  }

  // Populate Lina's Tab content
  const linaText = document.getElementById('lina-response-letter');
  const linaMediaContainer = document.getElementById('lina-media-container');

  if (mem.linaComment && mem.linaComment.trim() !== "") {
    linaText.innerText = mem.linaComment;
    linaText.className = "";
    
    const mediaList = mem.linaMedia || (mem.linaImage ? [{type: 'image', url: mem.linaImage}] : []);
    if (mediaList.length > 0) {
      linaMediaContainer.style.display = 'block';
      renderMediaSlider(mediaList, linaMediaContainer, `lina-${index}`);
    } else {
      linaMediaContainer.style.display = 'none';
    }
  } else {
    linaText.innerHTML = `<div class="lina-no-response-text">🌸 Lina aún no ha dejado su cartita de este mes...<br><small style="font-size:0.8rem; color:#aaa;">Ingresa en "🌸 Lina" para escribir tu respuesta y subir una foto juntos. ✨</small></div>`;
    linaMediaContainer.style.display = 'none';
  }

  // Unflip modal by default
  document.getElementById('letter-flip-card').classList.remove('flipped');

  // Activate modal overlay
  document.getElementById('letter-modal-overlay').classList.add('active');
}

// Open and populate form editor modal
function openEditorModal(index) {
  const mem = memories[index];

  document.getElementById('editor-modal-title').innerText = `Editar Recuerdo: Mes ${mem.number} (${mem.monthName})`;
  document.getElementById('edit-month-index').value = index;
  document.getElementById('edit-title').value = mem.title;
  document.getElementById('edit-caption').value = mem.caption;
  document.getElementById('edit-letter').value = mem.description;

  // Make deep clone of current media
  currentEditMedia = mem.media ? JSON.parse(JSON.stringify(mem.media)) : [];

  // Render current media in the editor grid
  renderEditorMediaGrid(currentEditMedia, 'edit-media-grid');

  // Populate Presets Grid
  const presetsGrid = document.getElementById('editor-presets-grid');
  presetsGrid.innerHTML = '';

  IMAGE_PRESETS.forEach((presetUrl) => {
    const img = document.createElement('img');
    img.src = presetUrl;
    img.className = 'preset-thumb';
    // Highlight if this preset is already in the media list
    const isAdded = currentEditMedia.some(item => item.url === presetUrl);
    if (isAdded) img.classList.add('active');

    img.addEventListener('click', () => {
      // Toggle preset in list
      if (!currentEditMedia.some(item => item.url === presetUrl)) {
        currentEditMedia.push({ type: 'image', url: presetUrl });
        renderEditorMediaGrid(currentEditMedia, 'edit-media-grid');
        img.classList.add('active');
      } else {
        currentEditMedia = currentEditMedia.filter(item => item.url !== presetUrl);
        renderEditorMediaGrid(currentEditMedia, 'edit-media-grid');
        img.classList.remove('active');
      }
    });

    presetsGrid.appendChild(img);
  });

  // Clean inputs
  document.getElementById('edit-media-url-input').value = '';
  document.getElementById('edit-media-file-input').value = '';
  document.getElementById('edit-storage-warning').style.display = 'none';

  // Default type image
  document.getElementById('btn-toggle-type-image').classList.add('active');
  document.getElementById('btn-toggle-type-video').classList.remove('active');
  currentAddType = 'image';

  // Open editor modal overlay
  document.getElementById('editor-modal-overlay').classList.add('active');
}

// Form Saving and Local File uploading logic
function initFormHandlers() {
  const fileInput = document.getElementById('edit-media-file-input');
  const triggerBtn = document.getElementById('btn-trigger-file-upload');
  const urlInput = document.getElementById('edit-media-url-input');
  const addBtn = document.getElementById('btn-add-media-item');
  
  // Toggles for adding media type
  const typeImageBtn = document.getElementById('btn-toggle-type-image');
  const typeVideoBtn = document.getElementById('btn-toggle-type-video');
  const warningText = document.getElementById('edit-storage-warning');

  if (typeImageBtn && typeVideoBtn) {
    typeImageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      typeImageBtn.classList.add('active');
      typeVideoBtn.classList.remove('active');
      currentAddType = 'image';
      if (warningText) warningText.style.display = 'none';
    });

    typeVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      typeVideoBtn.classList.add('active');
      typeImageBtn.classList.remove('active');
      currentAddType = 'video';
      if (warningText) warningText.style.display = 'block';
    });
  }

  // Trigger file dialog on clicking styled button
  if (triggerBtn && fileInput) {
    triggerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fileInput.click();
    });
  }

  // Local File Uploading base64 parser
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Validate file size (limit base64 storage overflow)
        if (file.size > 6 * 1024 * 1024) {
          alert("El archivo es demasiado grande. Elige uno menor a 6MB para asegurar que se guarde correctamente.");
          fileInput.value = '';
          return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
          let fileType = currentAddType;
          if (file.type.startsWith('video/')) {
            fileType = 'video';
          } else if (file.type.startsWith('image/')) {
            fileType = 'image';
          }
          
          currentEditMedia.push({
            type: fileType,
            url: event.target.result
          });

          renderEditorMediaGrid(currentEditMedia, 'edit-media-grid');
          fileInput.value = '';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Add media by URL
  if (addBtn && urlInput) {
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const urlVal = urlInput.value.trim();
      if (!urlVal) {
        alert("Por favor ingresa una URL válida.");
        return;
      }

      let resolvedType = currentAddType;
      if (isYouTubeUrl(urlVal)) {
        resolvedType = 'youtube';
      }

      currentEditMedia.push({
        type: resolvedType,
        url: urlVal
      });

      renderEditorMediaGrid(currentEditMedia, 'edit-media-grid');
      urlInput.value = '';
    });
  }

  // Form submission saving handler
  document.getElementById('editor-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const idx = parseInt(document.getElementById('edit-month-index').value);

    // Save updated details back to memories array
    memories[idx].title = document.getElementById('edit-title').value.trim();
    memories[idx].caption = document.getElementById('edit-caption').value.trim();
    memories[idx].description = document.getElementById('edit-letter').value.trim();
    memories[idx].media = currentEditMedia;
    
    // Fallback cover thumbnail for older browser support
    if (currentEditMedia.length > 0) {
      memories[idx].image = currentEditMedia[0].url;
    }

    // Commit array to LocalStorage
    localStorage.setItem('linaplay_memories', JSON.stringify(memories));

    // Re-render and close
    renderMemories();
    document.getElementById('editor-modal-overlay').classList.remove('active');

    // Sweet heart blast from page center
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
  });
}

// Stat bar initial slide-in transitions
function initStatBarAnimations() {
  setTimeout(() => {
    document.querySelectorAll('.stat-bar-fill').forEach(bar => {
      // The CSS specifies inline styles for width which the transition hooks!
    });
  }, 100);
}

// Particle heart burst blast engine
function createHeartExplosion(x, y) {
  const container = document.body;
  const count = 45;
  const symbols = ['💖', '❤️', '💕', '💓', '💘', '🌸', '✨'];

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'heart-burst-particle';

    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    p.innerText = randomSymbol;

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 180 + 70;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - Math.random() * 40;
    const scale = Math.random() * 0.9 + 0.4;
    const rotate = Math.random() * 360 + 90;

    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);
    p.style.setProperty('--sc', `${scale}`);
    p.style.setProperty('--rot', `${rotate}deg`);

    container.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 1200);
  }
}

// Open and populate Lina's response modal
function openLinaModal(index) {
  const mem = memories[index];

  document.getElementById('lina-modal-title').innerText = `💌 Carta de Respuesta de Lina: Mes ${mem.number}`;
  document.getElementById('lina-month-index').value = index;
  document.getElementById('lina-comment').value = mem.linaComment || "";

  // Make deep clone of Lina response media
  currentLinaEditMedia = mem.linaMedia ? JSON.parse(JSON.stringify(mem.linaMedia)) : [];

  // Render current media in editor grid
  renderEditorMediaGrid(currentLinaEditMedia, 'lina-media-grid');

  // Clean inputs
  document.getElementById('lina-media-url-input').value = '';
  document.getElementById('lina-media-file-input').value = '';
  document.getElementById('lina-storage-warning').style.display = 'none';

  // Default type image
  document.getElementById('btn-lina-type-image').classList.add('active');
  document.getElementById('btn-lina-type-video').classList.remove('active');
  currentLinaAddType = 'image';

  // Open lina modal overlay
  document.getElementById('lina-modal-overlay').classList.add('active');
}

// Lina form saving and file uploading logic
function initLinaFormHandlers() {
  const linaModal = document.getElementById('lina-modal-overlay');
  const fileInput = document.getElementById('lina-media-file-input');
  const triggerBtn = document.getElementById('btn-trigger-lina-file');
  const urlInput = document.getElementById('lina-media-url-input');
  const addBtn = document.getElementById('btn-add-lina-media-item');
  
  // Toggles for adding media type
  const typeImageBtn = document.getElementById('btn-lina-type-image');
  const typeVideoBtn = document.getElementById('btn-lina-type-video');
  const warningText = document.getElementById('lina-storage-warning');

  if (typeImageBtn && typeVideoBtn) {
    typeImageBtn.addEventListener('click', (e) => {
      e.preventDefault();
      typeImageBtn.classList.add('active');
      typeVideoBtn.classList.remove('active');
      currentLinaAddType = 'image';
      if (warningText) warningText.style.display = 'none';
    });

    typeVideoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      typeVideoBtn.classList.add('active');
      typeImageBtn.classList.remove('active');
      currentLinaAddType = 'video';
      if (warningText) warningText.style.display = 'block';
    });
  }

  // Trigger file dialog on clicking styled button
  if (triggerBtn && fileInput) {
    triggerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fileInput.click();
    });
  }

  // Local File Uploading base64 parser
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        // Validate file size (limit base64 storage overflow)
        if (file.size > 6 * 1024 * 1024) {
          alert("El archivo es demasiado grande. Elige uno menor a 6MB para asegurar que se guarde correctamente.");
          fileInput.value = '';
          return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
          let fileType = currentLinaAddType;
          if (file.type.startsWith('video/')) {
            fileType = 'video';
          } else if (file.type.startsWith('image/')) {
            fileType = 'image';
          }

          currentLinaEditMedia.push({
            type: fileType,
            url: event.target.result
          });

          renderEditorMediaGrid(currentLinaEditMedia, 'lina-media-grid');
          fileInput.value = '';
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Add media by URL
  if (addBtn && urlInput) {
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const urlVal = urlInput.value.trim();
      if (!urlVal) {
        alert("Por favor ingresa una URL válida.");
        return;
      }

      let resolvedType = currentLinaAddType;
      if (isYouTubeUrl(urlVal)) {
        resolvedType = 'youtube';
      }

      currentLinaEditMedia.push({
        type: resolvedType,
        url: urlVal
      });

      renderEditorMediaGrid(currentLinaEditMedia, 'lina-media-grid');
      urlInput.value = '';
    });
  }

  // Close buttons
  document.getElementById('btn-close-lina-modal').addEventListener('click', () => {
    linaModal.classList.remove('active');
  });
  document.getElementById('btn-cancel-lina').addEventListener('click', () => {
    linaModal.classList.remove('active');
  });

  // Closes modal if user clicks outside container glass box
  window.addEventListener('click', (e) => {
    if (e.target === linaModal) linaModal.classList.remove('active');
  });

  // Form submission saving handler
  document.getElementById('lina-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const idx = parseInt(document.getElementById('lina-month-index').value);

    // Save updated details back to memories array
    memories[idx].linaComment = document.getElementById('lina-comment').value.trim();
    memories[idx].linaMedia = currentLinaEditMedia;
    
    if (currentLinaEditMedia.length > 0) {
      memories[idx].linaImage = currentLinaEditMedia[0].url;
    } else {
      memories[idx].linaImage = "";
    }

    // Commit array to LocalStorage
    localStorage.setItem('linaplay_memories', JSON.stringify(memories));

    // Re-render and close
    renderMemories();
    linaModal.classList.remove('active');

    // Sweet heart blast from page center
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
    alert("¡Tu respuesta ha sido guardada con amor! 🌸💖 Alan la leerá cuando voltee esta polaroid.");
  });
}

// Load YouTube Iframe API dynamically
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('love-youtube-player', {
    height: '0',
    width: '0',
    videoId: 'kYt_lU6tWkM', // YouTube video ID for HowL - Love U
    playerVars: {
      'autoplay': 0,
      'loop': 1,
      'playlist': 'kYt_lU6tWkM', // Required for looping in YouTube player
      'controls': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'playsinline': 1
    }
  });
}
