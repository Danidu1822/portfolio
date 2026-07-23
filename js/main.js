// ===================================================================
// Portfolio interactions — vanilla JS port of the original React app.
// ===================================================================

const ICONS = {
  brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 1.5 5 1.5 5 1.5c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 8.5C4 12 7 14 10 14a4.8 4.8 0 0 0-1 3.5V22"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  "graduation-cap": '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  phone: '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.316 1.079l-.464.354a1 1 0 0 0-.294 1.212 14 14 0 0 0 6.02 6.023"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  award: '<path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/><circle cx="12" cy="8" r="7"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
};

function icon(name, size = 16) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// ---------- Render: Nav links ----------
const navLinks = document.getElementById("nav-links");
const navMobile = document.getElementById("nav-mobile");
NAV.forEach((n) => {
  navLinks.appendChild(el(`<a href="#${n.id}">${n.label}</a>`));
  navMobile.appendChild(el(`<a href="#${n.id}">${n.label}</a>`));
});

// ---------- Render: Hero socials ----------
const heroSocials = document.getElementById("hero-socials");
[
  { href: CONTACT.github, iconName: "github", label: "GitHub" },
  { href: CONTACT.linkedin, iconName: "linkedin", label: "LinkedIn" },
  { href: `mailto:${CONTACT.email}`, iconName: "mail", label: "Email" },
].forEach(({ href, iconName, label }) => {
  heroSocials.appendChild(el(`<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}" class="social-btn glass">${icon(iconName)}</a>`));
});

// ---------- Render: Stats ----------
const statsGrid = document.getElementById("stats-grid");
STATS.forEach((s) => {
  const card = el(`
    <div class="reveal">
      <div class="stat-card glass-strong">
        <div class="stat-value text-gradient" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    </div>`);
  statsGrid.appendChild(card);
});

// ---------- Render: Skills ----------
const skillsGrid = document.getElementById("skills-grid");
TECH_SKILLS.forEach((s) => {
  skillsGrid.appendChild(el(`
    <div class="skill-card glass">
      <div class="skill-top">
        <div class="skill-name">${s.name}</div>
        <div class="skill-level">Intermediate</div>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>`));
});

const softSkillsGrid = document.getElementById("soft-skills-grid");
SOFT_SKILLS.forEach((s) => {
  softSkillsGrid.appendChild(el(`
    <div class="reveal">
      <div class="soft-skill-card glass">
        <div class="soft-skill-icon">${icon(s.icon)}</div>
        <div class="soft-skill-name">${s.name}</div>
      </div>
    </div>`));
});

// ---------- Render: Projects ----------
const projectsGrid = document.getElementById("projects-grid");
PROJECTS.forEach((p) => {
  const statusClass = p.status === "Completed" ? "status-completed" : "status-upcoming";
  projectsGrid.appendChild(el(`
    <div class="reveal">
      <div class="project-card glass-strong">
        <div class="project-banner" style="background:${p.gradient};">
          <div class="grid-bg" style="position:absolute; inset:0; opacity:0.3;"></div>
          <div class="icon">${p.icon}</div>
          <div class="project-status glass"><span class="${statusClass}">● ${p.status}</span></div>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p class="desc">${p.desc}</p>
          <div class="project-tags">${p.tech.map((t) => `<span class="glass">${t}</span>`).join("")}</div>
          <div class="project-actions">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm glass">${icon("github", 14)} GitHub</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${icon("external", 14)} Open Project</a>` : ""}
          </div>
        </div>
      </div>
    </div>`));
});

// ---------- Render: Education timeline ----------
const eduTimeline = document.getElementById("education-timeline");
EDUCATION.forEach((e) => {
  eduTimeline.appendChild(el(`
    <div class="reveal">
      <div class="timeline-item">
        <div class="timeline-dot animate-pulse-glow"></div>
        <div class="timeline-card glass">
          <div class="timeline-year">${e.year}</div>
          <div class="t-title">${e.title}</div>
          <div class="t-place">${e.place}</div>
          <p class="t-desc">${e.desc}</p>
        </div>
      </div>
    </div>`));
});

// ---------- Render: Experience ----------
const expList = document.getElementById("experience-list");
EXPERIENCE.forEach((x) => {
  expList.appendChild(el(`
    <div class="reveal">
      <div class="exp-card glass">
        <div class="exp-top">
          <div><div class="exp-role">${x.role}</div><div class="exp-org">${x.org}</div></div>
          <div class="exp-period glass">${x.period}</div>
        </div>
        <p class="exp-desc">${x.desc}</p>
      </div>
    </div>`));
});

// ---------- Render: Achievements ----------
const achievementsGrid = document.getElementById("achievements-grid");
ACHIEVEMENTS.forEach((a) => {
  achievementsGrid.appendChild(el(`
    <div class="reveal">
      <div class="achievement-card glass">
        <div class="achievement-icon">${icon(a.icon)}</div>
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-desc">${a.desc}</div>
      </div>
    </div>`));
});

// ---------- Render: coursework ----------
const certGrid = document.getElementById("cert-grid");
coursework.forEach((c) => {
  certGrid.appendChild(el(`
    <div class="reveal">
      <div class="cert-card glass-strong">
        <div class="cert-glow"></div>
        <div class="cert-icon">${c.icon}</div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <div 
      </div>
    </div>`));
});

// ---------- Render: Contact list ----------
const contactList = document.getElementById("contact-list");
[
  { iconName: "mail", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { iconName: "phone", label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { iconName: "map-pin", label: "Location", value: CONTACT.location, href: null },
  { iconName: "github", label: "GitHub", value: CONTACT.githubHandle, href: CONTACT.github },
  { iconName: "linkedin", label: "LinkedIn", value: CONTACT.linkedinHandle, href: CONTACT.linkedin },
].forEach(({ iconName, label, value, href }) => {
  const inner = `
    <div class="contact-item glass">
      <div class="contact-icon">${icon(iconName)}</div>
      <div style="min-width:0;">
        <div class="contact-label">${label}</div>
        <div class="contact-value">${value}</div>
      </div>
    </div>`;
  if (href) {
    const external = href.startsWith("http");
    contactList.appendChild(el(`<a href="${href}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`));
  } else {
    contactList.appendChild(el(`<div>${inner}</div>`));
  }
});

// ---------- Render: Footer socials + copy ----------
document.getElementById("footer-copy").textContent =
  `© ${new Date().getFullYear()} Danidu Wijegunawardhana — Crafted with HTML, CSS & JavaScript.`;
const footerSocials = document.getElementById("footer-socials");
[
  { href: CONTACT.github, iconName: "github", label: "GitHub" },
  { href: CONTACT.linkedin, iconName: "linkedin", label: "LinkedIn" },
  { href: `mailto:${CONTACT.email}`, iconName: "mail", label: "Email" },
].forEach(({ href, iconName, label }) => {
  footerSocials.appendChild(el(`<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}" class="glass">${icon(iconName)}</a>`));
});

// ===================================================================
// Behavior
// ===================================================================

// ---- Loader ----
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("done"), 900);
});

// ---- Typing effect ----
(function typingEffect() {
  const node = document.getElementById("typing-text");
  let i = 0, text = "", deleting = false;
  function tick() {
    const word = TYPING[i % TYPING.length];
    if (!deleting) {
      text = word.slice(0, text.length + 1);
      node.textContent = text;
      if (text.length === word.length) { setTimeout(() => { deleting = true; tick(); }, 1400); return; }
    } else {
      text = word.slice(0, text.length - 1);
      node.textContent = text;
      if (text.length === 0) { deleting = false; i++; }
    }
    setTimeout(tick, deleting ? 40 : 90);
  }
  tick();
})();

// ---- Reveal on scroll ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "-80px" });
document.querySelectorAll(".reveal").forEach((r) => revealObserver.observe(r));

// ---- Skill bar fill on scroll into view ----
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector(".skill-bar-fill");
      if (fill) fill.style.width = fill.dataset.level + "%";
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll(".skill-card").forEach((c) => skillObserver.observe(c));

// ---- Stat counters ----
function animateCounter(node) {
  const target = parseInt(node.dataset.target, 10);
  const suffix = node.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();
  function step(t) {
    const p = Math.min((t - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    node.textContent = Math.floor(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".stat-value").forEach((n) => statObserver.observe(n));

// ---- Nav scroll state + mobile toggle ----
const siteNav = document.getElementById("site-nav");
window.addEventListener("scroll", () => {
  siteNav.classList.toggle("scrolled", window.scrollY > 30);
  document.getElementById("scroll-top").classList.toggle("show", window.scrollY > 400);
  updateScrollProgress();
}, { passive: true });

const navToggle = document.getElementById("nav-toggle");
const navMobilePanel = document.getElementById("nav-mobile");
navToggle.addEventListener("click", () => {
  const open = navMobilePanel.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navMobilePanel.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navMobilePanel.classList.remove("open")));

// ---- Ripple buttons ----
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ---- Scroll to top ----
document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---- Scroll progress bar ----
function updateScrollProgress() {
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const height = h.scrollHeight - h.clientHeight;
  const pct = height > 0 ? (scrolled / height) * 100 : 0;
  document.getElementById("scroll-progress").style.width = pct + "%";
}

// ---- Cursor glow ----
const cursorGlow = document.getElementById("cursor-glow");
window.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  cursorGlow.classList.add("active");
  cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
window.addEventListener("pointerleave", () => cursorGlow.classList.remove("active"));

// ---- Contact form (mailto, same as original) ----
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cf-name").value;
  const email = document.getElementById("cf-email").value;
  const message = document.getElementById("cf-message").value;
  const body = encodeURIComponent(`Hi Danidu,\n\n${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${body}`;
  document.getElementById("form-sent").style.display = "block";
});
