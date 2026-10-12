const root = document.documentElement;
const nav = document.querySelector("#nav-links");
const menuToggle = document.querySelector("#menu-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const toast = document.querySelector("#toast");

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

function setTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode",
  );
  localStorage.setItem("portfolio-theme", theme);
}

themeToggle.addEventListener("click", () =>
  setTheme(root.classList.contains("dark") ? "light" : "dark"),
);
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }),
);

async function sharePage() {
  try {
    if (navigator.share) {
      await navigator.share({
        title: "CSR Professional Portfolio",
        url: window.location.href,
      });
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 2200);
  } catch (error) {
    if (error.name !== "AbortError") console.warn("Share unavailable:", error);
  }
}

document.querySelector("#nav-share").addEventListener("click", sharePage);
document.querySelector("#footer-share").addEventListener("click", sharePage);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);

document
  .querySelectorAll("section")
  .forEach((section) => observer.observe(section));
