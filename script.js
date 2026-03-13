// ─── Spotlight ────────────────────────────────────────────────────────────────
const spotlight = document.getElementById("spotlight");
document.addEventListener("mousemove", (e) => {
  spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29,78,216,0.15), transparent 80%)`;
});

// ─── Active nav ───────────────────────────────────────────────────────────────
// ─── Active nav (scroll tracking) ────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`,
        );

        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    root: null,
    threshold: 0.6,
  },
);

sections.forEach((section) => observer.observe(section));
function updateNav() {
  // Which section's top has most recently scrolled past the halfway point?
  const mid = window.innerHeight / 2;
  let current = sections[0];
  sections.forEach((s) => {
    if (s.getBoundingClientRect().top <= mid) current = s;
  });

  navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("active", active);
  });
}

window.addEventListener("scroll", updateNav, { passive: true });
updateNav(); // run once on load
