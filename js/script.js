/* =========================================================
   MEENA'S BIRTHDAY WEBSITE — SCRIPT
   ---------------------------------------------------------
   Everything you're likely to want to edit lives at the TOP
   of this file: websiteConfig, memories, timelineEvents.
   ========================================================= */

/* ============ 1. EASY CUSTOMIZATION ============ */

const websiteConfig = {
  name: "Meena",
  birthdayMessage: "Happy Birthday, Meena! ❤️",
  music: "assets/music/dada-song.mp3",
  video: "assets/video/memory.mp4"
};

/**
 * PHOTO MEMORIES
 * ---------------
 * Add / remove / edit photos here — this is the ONLY place
 * image paths live. Two ways to point `image` at a real file:
 *
 *  1) LOCAL FILE
 *     Put the file in assets/images/ and reference it as:
 *     image: "assets/images/photo1.jpg"
 *
 *  2) GITHUB-HOSTED IMAGE
 *     Use the raw.githubusercontent.com URL, e.g.:
 *     image: "https://raw.githubusercontent.com/USERNAME/REPO/main/Images/photo1.jpeg"
 *
 *     To build that URL from a normal GitHub link:
 *     github.com/USER/REPO/blob/main/Images/file.jpeg
 *       -> replace "github.com" with "raw.githubusercontent.com"
 *       -> remove "/blob"
 *     Result:
 *     raw.githubusercontent.com/USER/REPO/main/Images/file.jpeg
 *
 *     NOTE: filenames with spaces or parentheses (like
 *     "WhatsApp Image 2026-08-09 at 5.58.14 PM (1).jpeg") need
 *     to be URL-encoded — spaces become %20, "(" becomes %28,
 *     ")" becomes %29. Example below.
 */
const memories = [
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.26.08 PM.jpeg",
    caption: "One of those memories I'll always keep ❤️"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.26.14 PM.jpeg",
    caption: "A beautiful memory with Meena ✨"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.13 PM.jpeg",
    caption: "Some memories never get old 💖"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.14 PM (1).jpeg",
    caption: "One of my favorite moments ❤️"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.14 PM (2).jpeg",
    caption: "A moment worth remembering ✨"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.14 PM.jpeg",
    caption: "Another beautiful memory 💕"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.15 PM.jpeg",
    caption: "The kind of memory that makes me smile 😊"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.16 PM.jpeg",
    caption: "Just another unforgettable moment ✨"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.18 PM.jpeg",
    caption: "Forever keeping this memory ❤️"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.20 PM (1).jpeg",
    caption: "A memory to keep forever 🌸"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.20 PM.jpeg",
    caption: "Another chapter of our memories ✨"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.21 PM.jpeg",
    caption: "And many more memories to come ❤️"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.22 PM (1).jpeg",
    caption: "Another little memory with Meena 💖"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.22 PM.jpeg",
    caption: "A moment I'll always remember ✨"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.23 PM.jpeg",
    caption: "Smiles, memories and good times ❤️"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.25 PM.jpeg",
    caption: "One more beautiful memory 💕"
  },
  {
    image: "assets/images/WhatsApp Image 2026-08-09 at 5.58.29 PM.jpeg",
    caption: "Here's to many more memories together 🌎✨"
  }
];

/**
 * TIMELINE — "The Meena Chronicles"
 * Edit freely. Order in this array = order shown on the page.
 */
const timelineEvents = [
  { emoji: "🌱", title: "The Beginning", text: "Where all the madness started..." },
  { emoji: "😂", title: "The Crazy Moments", text: "Too many memories to fit into one website." },
  { emoji: "😤", title: "The Fights", text: "Because apparently we can't survive without arguing sometimes." },
  { emoji: "🤣", title: "The Laughs", text: "The moments that made absolutely no sense but somehow became unforgettable." },
  { emoji: "📸", title: "The Memories", text: "Moments worth keeping forever." },
  { emoji: "🌎", title: "The Future", text: "More adventures. More laughter. More memories." }
];

/* ============ 2. INTRO SEQUENCE ============ */

function initIntro(){
  const intro = document.getElementById('intro');
  const line1 = document.getElementById('introLine1');
  const line2 = document.getElementById('introLine2');
  const name  = document.getElementById('introName');
  const line3 = document.getElementById('introLine3');
  const skipBtn = document.getElementById('introSkip');
  const site = document.getElementById('site');

  // scatter twinkle particles
  const particleHost = document.getElementById('introParticles');
  const particleCount = window.innerWidth < 600 ? 30 : 55;
  for(let i=0;i<particleCount;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + '%';
    s.style.top = Math.random()*100 + '%';
    s.style.animationDelay = (Math.random()*3.5).toFixed(2) + 's';
    particleHost.appendChild(s);
  }

  let finished = false;

  function endIntro(){
    if(finished) return;
    finished = true;
    intro.classList.add('hidden');
    site.classList.add('visible');
    site.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = '';
    setTimeout(()=> intro.remove(), 1200);
  }

  skipBtn.addEventListener('click', endIntro);

  // lock scroll during intro
  document.body.style.overflow = 'hidden';

  const t = (ms, fn) => setTimeout(fn, ms);

  t(300, ()=> line1.classList.add('show'));
  t(2400, ()=> line1.classList.add('fade-out'));
  t(2900, ()=> line2.classList.add('show'));
  t(4600, ()=> line2.classList.add('fade-out'));
  t(5000, ()=> name.classList.add('show'));
  t(7200, ()=> line3.classList.add('show'));
  t(10200, endIntro);

  // safety: allow click anywhere on intro after final line to skip early
  intro.addEventListener('click', (e)=>{
    if(e.target === skipBtn) return;
    if(line3.classList.contains('show')) endIntro();
  });
}

/* ============ 3. AMBIENT FLOATERS (hearts / sparkles) ============ */

function initFloaters(){
  const host = document.getElementById('floaters');
  const symbols = ['❤️','💖','✨','💫'];
  const isMobile = window.innerWidth < 600;
  const maxFloaters = isMobile ? 10 : 18;
  let active = 0;

  function spawn(){
    if(active >= maxFloaters) return;
    active++;
    const el = document.createElement('span');
    el.className = 'floater';
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    const size = 14 + Math.random()*18;
    el.style.left = Math.random()*100 + '%';
    el.style.fontSize = size + 'px';
    el.style.setProperty('--drift', (Math.random()*80 - 40) + 'px');
    const duration = 9 + Math.random()*7;
    el.style.animationDuration = duration + 's';
    host.appendChild(el);
    setTimeout(()=>{ el.remove(); active--; }, duration*1000 + 200);
  }

  setInterval(spawn, 1400);
  for(let i=0;i<5;i++) setTimeout(spawn, i*400);
}

/* ============ 4. SCROLL REVEAL ============ */

function initScrollReveal(){
  const targets = document.querySelectorAll('.reveal, .polaroid');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(t=> io.observe(t));
}

/* ============ 5. GALLERY + LIGHTBOX ============ */

function initGallery(){
  const grid = document.getElementById('galleryGrid');
  const tilts = [-3, -2, -1, 1, 2, 3];

  memories.forEach((m, i)=>{
    const card = document.createElement('div');
    card.className = 'polaroid';
    card.style.setProperty('--tilt', tilts[i % tilts.length] + 'deg');
    card.dataset.index = i;
    card.innerHTML = `
      <img src="${m.image}" alt="${escapeHtml(m.caption)}" loading="lazy"
           onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(placeholderSvg())}'">
      <p class="polaroid-caption">${escapeHtml(m.caption)}</p>
    `;
    card.addEventListener('click', ()=> openLightbox(i));
    grid.appendChild(card);
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.polaroid').forEach(el=> io.observe(el));
}

function placeholderSvg(){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500">
    <rect width="100%" height="100%" fill="#5b2ca0"/>
    <text x="50%" y="50%" fill="#ffd579" font-size="22" font-family="sans-serif" text-anchor="middle">Add photo ✨</text>
  </svg>`;
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

let lightboxIndex = 0;
function openLightbox(index){
  lightboxIndex = index;
  renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function renderLightbox(){
  const m = memories[lightboxIndex];
  document.getElementById('lightboxImg').src = m.image;
  document.getElementById('lightboxImg').alt = m.caption;
  document.getElementById('lightboxCaption').textContent = m.caption;
}
function initLightbox(){
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e)=>{
    if(e.target.id === 'lightbox') closeLightbox();
  });
  document.getElementById('lightboxPrev').addEventListener('click', ()=>{
    lightboxIndex = (lightboxIndex - 1 + memories.length) % memories.length;
    renderLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', ()=>{
    lightboxIndex = (lightboxIndex + 1) % memories.length;
    renderLightbox();
  });
  document.addEventListener('keydown', (e)=>{
    if(!document.getElementById('lightbox').classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if(e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
}

/* ============ 6. TIMELINE ============ */

function initTimeline(){
  const list = document.getElementById('timelineList');
  timelineEvents.forEach(ev=>{
    const item = document.createElement('div');
    item.className = 'timeline-item reveal';
    item.innerHTML = `
      <span class="timeline-dot"></span>
      <h3>${escapeHtml(ev.title)} ${ev.emoji}</h3>
      <p>${escapeHtml(ev.text)}</p>
    `;
    list.appendChild(item);
  });
  // re-run reveal observer for newly added nodes
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  list.querySelectorAll('.reveal').forEach(el=> io.observe(el));
}

/* ============ 7. MUSIC PLAYER ============ */

function initMusicPlayer(){
  const audio = document.getElementById('bgAudio');
  const player = document.getElementById('musicPlayer');
  const toggleBtn = document.getElementById('mpToggle');
  const progressFill = document.getElementById('mpProgressFill');
  const volume = document.getElementById('mpVolume');

  audio.volume = parseFloat(volume.value);

  function play(){
    audio.play().then(()=>{
      player.classList.add('playing');
    }).catch(()=>{ /* autoplay blocked — user can press play manually */ });
  }
  function pause(){
    audio.pause();
    player.classList.remove('playing');
  }

  toggleBtn.addEventListener('click', ()=>{
    if(audio.paused) play(); else pause();
  });

  volume.addEventListener('input', ()=>{
    audio.volume = parseFloat(volume.value);
  });

  audio.addEventListener('timeupdate', ()=>{
    if(!audio.duration) return;
    progressFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
  });

  return { play, pause };
}

/* ============ 8. CONFETTI ============ */

function initConfetti(){
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let running = false;

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const colors = ['#ff6fa5', '#8a5cf6', '#ffd579', '#ffb37b', '#7ec8ff', '#c9a8ff'];

  function burst(count = 120){
    for(let i=0;i<count;i++){
      particles.push({
        x: canvas.width/2 + (Math.random()-0.5)*canvas.width*0.6,
        y: -20 - Math.random()*100,
        vx: (Math.random()-0.5)*6,
        vy: 2 + Math.random()*4,
        size: 5 + Math.random()*6,
        color: colors[Math.floor(Math.random()*colors.length)],
        rot: Math.random()*360,
        vr: (Math.random()-0.5)*10,
        shape: Math.random() > 0.5 ? 'rect' : 'circle'
      });
    }
    if(!running){ running = true; requestAnimationFrame(loop); }
  }

  function loop(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    particles.forEach(p=>{
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      if(p.shape === 'rect'){
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size*0.5);
      } else {
        ctx.beginPath();
        ctx.arc(0,0,p.size/2,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    });
    particles = particles.filter(p=> p.y < canvas.height + 40);
    if(particles.length > 0){
      requestAnimationFrame(loop);
    } else {
      running = false;
    }
  }

  return { burst };
}

/* ============ 9. GIFT BOX ============ */

function initGiftBox(confetti){
  const box = document.getElementById('giftBox');
  const reveal = document.getElementById('giftReveal');
  let opened = false;

  box.addEventListener('click', ()=>{
    if(opened) return;
    opened = true;
    box.classList.add('opened');
    confetti.burst(150);
    setTimeout(()=>{
      reveal.classList.add('show');
      confetti.burst(80);
    }, 400);
  });
}

/* ============ 10. CURSOR GLOW (desktop only) ============ */

function initCursorGlow(){
  if(window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  const glow = document.getElementById('cursorGlow');
  let raf = null;
  window.addEventListener('mousemove', (e)=>{
    glow.classList.add('active');
    if(raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(()=>{
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  });
  document.addEventListener('mouseleave', ()=> glow.classList.remove('active'));
}

/* ============ 11. FINALE STARS ============ */

function initFinaleStars(){
  const host = document.getElementById('finaleStars');
  const count = window.innerWidth < 600 ? 40 : 80;
  for(let i=0;i<count;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + '%';
    s.style.top = Math.random()*100 + '%';
    s.style.animationDelay = (Math.random()*4).toFixed(2) + 's';
    host.appendChild(s);
  }
}

/* ============ 12. START SURPRISE BUTTON ============ */

function initStartSurprise(musicControls, confetti){
  const btn = document.getElementById('startSurpriseBtn');
  let triggered = false;
  btn.addEventListener('click', ()=>{
    confetti.burst(140);
    musicControls.play();
    const feeling = document.getElementById('feeling');
    if(feeling){
      feeling.scrollIntoView({ behavior: 'smooth' });
    }
    if(!triggered){
      triggered = true;
      setTimeout(()=> confetti.burst(60), 500);
    }
  });
}

/* ============ INIT ============ */

document.addEventListener('DOMContentLoaded', ()=>{
  document.title = `Happy Birthday, ${websiteConfig.name}! 💖`;

  initIntro();
  initFloaters();
  initGallery();
  initLightbox();
  initTimeline();
  initScrollReveal();
  initCursorGlow();
  initFinaleStars();

  const confetti = initConfetti();
  const musicControls = initMusicPlayer();
  initGiftBox(confetti);
  initStartSurprise(musicControls, confetti);

  // final birthday message confetti burst when finale section appears
  const finale = document.getElementById('finale');
  if(finale){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          confetti.burst(100);
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(finale);
  }
});   
