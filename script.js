/* ═══════════════════════════════════════════════════
   ALEX MENSAH — PORTFOLIO SCRIPT
   Projects data, skills, all interactive behaviour
═══════════════════════════════════════════════════ */

/* ════════════════════════════════════════
   ⬇️  EDIT YOUR PROJECTS HERE
   Just add/edit objects in this array.
   Categories: "frontend", "fullstack", "ui"
════════════════════════════════════════ */
const projects = [
  {
    title: "VaultGreen Bank",
    description: "A modern international banking website featuring account management, financial services pages, and a professional fintech UI design.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🏦",
    color: "#1a5c38",
    live: "https://vaultgreenbank.vercel.app/", // replace if different
    github: " https://smoothjazz18n94.github.io/VAULTGREENBANK/",
  },

  {
    title: "Health & Organics",
    description: "A full e-commerce website for organic products with product listings, modern storefront UI, and responsive shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🛒",
    color: "#16a34a",
    live: "https://smoothjazz18n94.github.io/health-and-organics/", // change if needed
    github: "https://github.com/smoothjazz18n94/health-and-organics",
  },

  {
    title: "Law Firm Profile",
    description: "A professional attorney / law firm website with service pages, lawyer profile sections, and client-focused business design.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "⚖️",
    color: "#6366f1",
    live: "https://smoothjazz18n94.github.io/firm/", // change if needed
    github: "https://github.com/smoothjazz18n94/firm",
  },

  {
    title: "GSecure Shipment",
    description: "A logistics and shipment tracking website designed for international shipping companies with tracking interface and logistics UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🚚",
    color: "#f59e0b",
    live: "https://gsecureshipment.onrender.com/", // change if needed
    github: "https://github.com/smoothjazz18n94/gsecureshipment",
  },

  {
    title: "LittleByte Bakery",
    description: "A bakery business website featuring menu displays, product highlights, and a clean responsive design for small businesses.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    emoji: "🥐",
    color: "#ec4899",
    live: " https://smoothjazz18n94.github.io/littlebyte/", // change if needed
    github: "https://github.com/smoothjazz18n94/littlebyte",
  }
];




/* ════════════════════════════════════════
   ⬇️  EDIT YOUR SKILLS HERE
   level: 0–100 (shown as bar fill %)
════════════════════════════════════════ */
const skills = [
  { name:"HTML5",       icon:"🌐", level:95 },
  { name:"CSS3",        icon:"🎨", level:92 },
  { name:"JavaScript",  icon:"⚡", level:90 },
  { name:"React",       icon:"⚛️",  level:85 },
  { name:"TypeScript",  icon:"📘", level:75 },
  { name:"Node.js",     icon:"🟢", level:82 },
  { name:"Express",     icon:"🚂", level:80 },
  { name:"MongoDB",     icon:"🍃", level:75 },
  { name:"PostgreSQL",  icon:"🐘", level:65 },
  { name:"REST APIs",   icon:"🔌", level:88 },
  { name:"Git",         icon:"🌿", level:90 },
  { name:"Figma",       icon:"🖌️",  level:70 },
  { name:"Tailwind",    icon:"💨", level:85 },
  { name:"Vercel",      icon:"▲",  level:80 },
  { name:"Testing",     icon:"🧪", level:68 },
  { name:"Accessibility",icon:"♿", level:78 },
];

/* ════════════════════════════════════════
   RENDER PROJECTS
════════════════════════════════════════ */
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.dataset.category = p.category;
    card.style.animationDelay = `${i * 80}ms`;

    card.innerHTML = `
      <div class="project-thumb">
        <div class="project-thumb-bg"></div>
        <div class="project-thumb-inner" style="color:${p.color}20;text-shadow:0 0 60px ${p.color}40">
          ${p.emoji}
        </div>
        <div class="project-overlay">
          <a href="${p.live}" target="_blank" rel="noopener">Live Demo</a>
          <a href="${p.github}" target="_blank" rel="noopener" class="ghost-link">Source Code</a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tags">
          ${p.tech.map(t => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-links">
          <a href="${p.live}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M6 2H2v12h12v-4M8 2h6v6M14 2L8 8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Live Demo
          </a>
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-trigger reveal observer on new cards
  setTimeout(() => {
    grid.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  }, 50);
}

/* ════════════════════════════════════════
   RENDER SKILLS
════════════════════════════════════════ */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");

  skills.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.style.transitionDelay = `${i * 40}ms`;

    card.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar">
        <div class="skill-bar-fill" data-level="${s.level / 100}" style="transform:scaleX(0)"></div>
      </div>
      <div class="skill-level">${s.level}%</div>
    `;

    grid.appendChild(card);
  });
}

/* ════════════════════════════════════════
   INTERSECTION OBSERVER — scroll reveals
════════════════════════════════════════ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");

        // Animate skill bars
        const fill = entry.target.querySelector?.(".skill-bar-fill");
        if (fill) {
          setTimeout(() => {
            fill.style.transform = `scaleX(${fill.dataset.level})`;
            fill.classList.add("animated");
          }, 150);
        }

        // Animate stat counters
        const nums = entry.target.querySelectorAll?.("[data-count]");
        if (nums) animateCounters(nums);

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

function initObserver() {
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
    observer.observe(el);
  });
}

/* ════════════════════════════════════════
   ANIMATED COUNTERS
════════════════════════════════════════ */
function animateCounters(elements) {
  elements.forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1600;
    let start = null;

    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };

    requestAnimationFrame(step);
  });
}

/* ════════════════════════════════════════
   PROJECT FILTER
════════════════════════════════════════ */
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");

  // Only on non-touch devices
  if (window.matchMedia("(hover: none)").matches) {
    cursor.style.display   = "none";
    follower.style.display = "none";
    return;
  }

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top  = mouseY + "px";
  });

  // Smooth follower
  function animateCursor() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + "px";
    follower.style.top  = followerY + "px";
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover states
  const hoverEls = document.querySelectorAll("a, button, .project-card, .skill-card, .contact-method");
  hoverEls.forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("hovering");
      follower.classList.add("hovering");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("hovering");
      follower.classList.remove("hovering");
    });
  });
}

/* ════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById("nav");
  const ham = document.getElementById("hamburger");
  const mob = document.getElementById("mobNav");

  // Scroll behavior
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);

    // Active nav links
    const sections = ["hero","about","projects","skills","contact"];
    let current = "hero";
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      const href = link.getAttribute("href").replace("#","");
      link.classList.toggle("active", href === current);
    });
  }, { passive: true });

  // Hamburger
  ham.addEventListener("click", () => {
    const open = mob.classList.toggle("open");
    ham.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
}

function closeMob() {
  document.getElementById("mobNav").classList.remove("open");
  document.getElementById("hamburger").classList.remove("open");
  document.body.style.overflow = "";
}

/* ════════════════════════════════════════
   SMOOTH SCROLL (older browser support)
════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();
  const btn     = document.getElementById("formBtn");
  const btnText = document.getElementById("formBtnText");
  const success = document.getElementById("formSuccess");

  btn.disabled  = true;
  btnText.innerHTML = `<span style="display:inline-block;animation:spin .65s linear infinite;width:14px;height:14px;border:2px solid rgba(8,12,10,.3);border-top-color:var(--bg);border-radius:50%;vertical-align:middle;margin-right:8px"></span>Sending…`;

  // Simulate send (replace with your API call)
  setTimeout(() => {
    btnText.textContent = "Message Sent ✓";
    success.hidden = false;
    e.target.reset();
    setTimeout(() => {
      btnText.textContent = "Send Message";
      btn.disabled = false;
      success.hidden = true;
    }, 5000);
  }, 1500);
}

/* ════════════════════════════════════════
   NAV HOVER TEXT EFFECT
════════════════════════════════════════ */
function initNavHover() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("mouseenter", function () {
      const text = this.getAttribute("data-text") || this.textContent;
      let i = 0;
      const chars = "!@#$%^&*abcdefghijklmnopqrstuvwxyz";
      const interval = setInterval(() => {
        this.textContent = text.split("").map((c, idx) => {
          if (idx < i) return c;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        if (i >= text.length) { clearInterval(interval); this.textContent = text; }
        i += 1.5;
      }, 40);
    });
  });
}

/* ════════════════════════════════════════
   HERO MOUSE PARALLAX
════════════════════════════════════════ */
function initHeroParallax() {
  const orbs = document.querySelectorAll(".hero-orb");
  document.addEventListener("mousemove", e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 12;
      orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });
  }, { passive: true });
}

/* ════════════════════════════════════════
   TYPING EFFECT (Hero title)
════════════════════════════════════════ */
function initTyping() {
  const el = document.querySelector(".hero-title p");
  if (!el) return;
  const phrases = [
    "Full Stack Web Developer",
    "React & Node.js Engineer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 40 : 80);
  }

  // Start after initial reveal animation
  setTimeout(type, 1200);
}

/* ════════════════════════════════════════
   FOOTER YEAR
════════════════════════════════════════ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ════════════════════════════════════════
   INIT ALL
════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  initObserver();
  initFilters();
  initCursor();
  initNav();
  initSmoothScroll();
  initNavHover();
  initHeroParallax();
  initTyping();
});

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{
  threshold:0.15
});

revealElements.forEach(el=>{
  revealObserver.observe(el);
});
